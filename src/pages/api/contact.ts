import type { NextApiRequest, NextApiResponse } from "next"
import { LRUCache } from "lru-cache"

const RATE_LIMIT_OPTIONS = {
    max: 30, // 30 requests limit
    ttl: 60 * 1000 // per minute
}

const rateLimitCache = new LRUCache<string, number>(RATE_LIMIT_OPTIONS)

function rateLimiter(req: NextApiRequest): boolean {
    const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "unknown"

    const count = rateLimitCache.get(ip) || 0
    if (count >= 30) {
        return false
    }
    rateLimitCache.set(ip, count + 1)

    return true
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateContactData(fullName: string, email: string, phone: string | undefined) {
    const errors: string[] = []
    if (!EMAIL_REGEX.test(email)) {
        errors.push("Invalid email format.")
    }

    if (fullName.length === 0 || /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/.test(fullName) === false) {
        errors.push("Full name is required and should contain at least two words.")
    }

    // Only validate phone if it's provided
    if (phone && phone.length > 0 && /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone) === false) {
        errors.push("Phone number should be in the format (XX) XXXX-XXXX or (XX) XXXXX-XXXX.")
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}

// eslint-disable-next-line
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!!

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed. Only POST requests are allowed."
        })
    }

    if (!rateLimiter(req)) {
        return res.status(429).json({
            error: "Too many requests. Please try again later."
        })
    }

    const { fullName, email, phone } = req.body

    if (!fullName || !email) {
        return res.status(400).json({
            error: "Full name and email are required."
        })
    }

    const { isValid, errors } = validateContactData(fullName, email, phone)

    if (!isValid) {
        return res.status(400).json({ errors })
    }

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                embeds: [{
                    title: "📬 Novo contato recebido!",
                    color: 0x6A0DAD, // Dark purple
                    fields: [
                        {
                            name: "Nome completo",
                            value: fullName
                        },
                        {
                            name: "E-mail",
                            value: email
                        },
                        {
                            name: "Telefone",
                            value: phone || "Não informado"
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "© Maxyni - Leads"
                    }
                }]
            })
        })

        return res.status(200).json({
            message: "Contact request sent successfully."
        })
    } catch (error: any) {
        console.error("Error while sending message to Discord:", error)
        return res.status(500).json({
            error: "Failed to send message to Discord."
        })
    }
}