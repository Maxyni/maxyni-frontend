"use client"

import Logo from "../svg/logo"
import Drawer from "./drawer"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ContactModal } from "./contact/contact-modal"
import { useTranslations } from "next-intl"
import { LanguageSelect } from "../i18n/language-select"
import { RiContactsLine } from "react-icons/ri"

export function Navbar() {
    const t = useTranslations("navbar")
    const router = useRouter()

    const [isSticky, setIsSticky] = useState(false) // State to control the navbar style - sticky or not.
    const [navbarHeight, setNavbarHeight] = useState(0) // Stores the navbar height - used in the placeholder div.

    const [contactModalOpen, setContactModalOpen] = useState(false) // State to control the contact modal visibility.

    /**
     * Handle the scroll event to change the navbar style.
     */
    useEffect(() => {
        const navbarElement = document.getElementById("navbar")

        if (navbarElement) {
            setNavbarHeight(navbarElement.offsetHeight)
        }

        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />

            {isSticky && <div id="start" style={{ height: navbarHeight }} />}

            <motion.header
                layout
                id="navbar"
                className={`px-4 md:px-14 w-full z-20 flex ${isSticky ? "fixed shadow-lg bg-white top-0 inset-x-0 py-0" : "relative py-5"}`}
            >
                <nav className={`w-full flex justify-between items-center ${isSticky ? "py-0" : "py-5"}`}>
                    <div className="flex items-center gap-12">
                        <Link href="/" aria-label={t("logo_aria_label")}>
                            <Logo width={isSticky ? 50 : 85} height={80} />
                        </Link>

                        <ul className="hidden sm:flex gap-6">
                            <li>
                                <Link href="#start" className="nav-link" aria-label={t("home.aria_label")}>
                                    {t("home.text")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="nav-link" aria-label={t("about.aria_label")}>
                                    {t("about.text")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#solutions" className="nav-link" aria-label={t("solutions.aria_label")}>
                                    {t("solutions.text")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <motion.div layout className="flex items-center gap-6">
                        <div className="relative h-12 w-40 rounded-xl group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#73BFFF] to-[#9A35E4] transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                            <a
                                href="#contact"
                                className="relative flex items-center gap-2 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10 hover:cursor-pointer"
                                aria-label={t("contact_button.aria_label")}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setContactModalOpen(true)
                                    router.push("#contact", { scroll: false })
                                }}
                            >
                                <RiContactsLine size={18} />
                                <span>{t("contact_button.text")}</span>
                            </a>
                        </div>

                        <LanguageSelect hideSelect={isSticky} />
                        
                        <Drawer />
                    </motion.div>
                </nav>
            </motion.header>
        </>
    )
}