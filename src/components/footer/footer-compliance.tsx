"use client"

import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Modal from "../ui/modal"
import Link from "next/link"

export default function FooterCompliance() {
    const t = useTranslations("footer")
    const router = useRouter()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (window.location.hash === "#compliance") {
            document.getElementById("footer")?.scrollIntoView()
            setOpen(true)
        }
    }, [])

    const [loading, setLoading] = useState(true)

    const fetchTerms = async () => {
        setLoading(true)

        // TODO: Fetch terms from API.

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    return (
        <Modal
            title={t("compliance.title")}
            externalOpenState={open}
            buttonToOpen={
                <a href="#compliance" className="hover:underline me-4 md:me-6">{t("links.compliance_text")}</a>
            }
            onOpen={fetchTerms}
            onClose={() => {
                setOpen(false)
                router.push("/", { scroll: false })
            }}
        >
            <div className="p-4">
                {loading ? (
                    <div className="flex flex-col gap-6">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="animate-pulse h-5 w-full bg-gray-300 rounded-lg" />
                                <div className="animate-pulse h-5 w-[50%] bg-gray-300 rounded-lg" />
                                <div className="animate-pulse h-5 w-[80%] bg-gray-300 rounded-lg" />
                                <div className="animate-pulse h-5 w-[35%] bg-gray-300 rounded-lg" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {Array.from({ length: 7 }).map((_, i) => (
                            <span key={i}>
                                {t.rich(`compliance.terms.${i + 1}`, {
                                    p: (text) => <p className="text-black font-normal">{text}</p>,
                                    strong: (text) => <strong>{text}</strong>,
                                    Link: (text) => <Link href="mailto:contato@maxyni.com.br" className="hover:underline font-semibold">{text}</Link>
                                })}
                            </span>
                        ))}
                    </>
                )}
            </div>
        </Modal>
    )
}