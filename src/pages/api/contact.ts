import type { NextApiRequest, NextApiResponse } from "next"
import { LRUCache } from "lru-cache"
import axios from "axios"

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

function validateContactData(fullName: string, email: string, phone: string) {
    const errors: string[] = []
    if (!EMAIL_REGEX.test(email)) {
        errors.push("Invalid email format.")
    }

    if (fullName.length === 0 || /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/.test(fullName) === false) {
        errors.push("Full name is required and should contain at least two words.")
    }


    if (phone.length === 0 || /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone) === false) {
        errors.push("Phone number is required and should be in the format (XX) XXXX-XXXX or (XX) XXXXX-XXXX.")
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

    if (!fullName || !email || !phone) {
        return res.status(400).json({
            error: "Full name, email, and phone are required."
        })
    }

    const { isValid, errors } = validateContactData(fullName, email, phone)

    if (!isValid) {
        return res.status(400).json({ errors })
    }

    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                content: `📬 Novo contato recebido:\n**Nome completo:** ${fullName}\n**E-mail:** ${email}\n**Telefone:** ${phone}`
            }
        })

        return res.status(200)
    } catch (error: any) {
        console.error("Error while sending message to Discord:", error)
        return res.status(500).json({
            error: "Failed to send message to Discord."
        })
    }
}