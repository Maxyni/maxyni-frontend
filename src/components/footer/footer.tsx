"use client"

import Link from "next/link"
import { Logo } from "../svg/logo"
import { BsGithub, BsInstagram } from "react-icons/bs"
import Modal from "../ui/modal"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

export default function Footer() {
    const t = useTranslations("footer")
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (window.location.hash === "#compliance") {
            document.getElementById("footer")?.scrollIntoView()
            setIsOpen(true)
        }
    }, [])

    const [loading, setLoading] = useState(true)
    // const [termsHTML, setTermsHTML] = useState<string | undefined>(undefined)

    const fetchTerms = async () => {
        setLoading(true)

        // TODO: Fetch terms from API.

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    return (
        <footer id="footer" className="mt-28 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-col md:gap-4">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Logo width={50} height={50} />
                            <div className="flex flex-col items-start justify-start text-left">
                                <span className="text-2xl font-semibold whitespace-nowrap">Maxyni</span>
                                <p className="text-xs text-gray-500">{t("slogan")}</p>
                            </div>
                        </Link>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 mt-4">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">{t("links.company_text")}</a>
                        </li>
                        <li>
                            <Modal
                                title="Política de Privacidade"
                                externalOpenState={isOpen}
                                buttonToOpen={
                                    <a href="#compliance" className="hover:underline me-4 md:me-6">{t("links.compliance_text")}</a>
                                }
                                onOpen={fetchTerms}
                                onClose={() => {
                                    setIsOpen(false)
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
                                            {Array.from({ length: 8 }).map((_, i) => (
                                                <span key={i}>
                                                    {t.rich(`compliance.terms.${i + 1}`, {
                                                        p: (text) => <p className="text-black font-normal">{text}</p>,
                                                        strong: (text) => <strong>{text}</strong>,
                                                        Link: (text) => <Link href="mailto:suporte@maxyni.com.br" className="hover:underline font-semibold">{text}</Link>
                                                    })}
                                                </span>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </Modal>
                        </li>

                        <li className="flex">
                            <a href="https://github.com/Maxyni" target="_blank" className="me-4 md:me-6"><BsGithub /></a>
                        </li>
                        <li className="flex">
                            <a href="https://instagram.com/MaxyniSistemas" target="_blank" className="me-4 md:me-6"><BsInstagram /></a>
                        </li>
                    </ul>
                </div>

                <hr className="mt-6 border-gray-200 sm:mx-auto lg:my-8" />

                <span className="block text-sm text-gray-500 text-center py-6 md:py-0">
                    {t.rich("rights", {
                        Link: (text) => <Link href="/" className="hover:underline">{text}</Link>,
                        year: `${new Date().getFullYear()}`
                    })}
                </span>
            </div>
        </footer>
    )
}