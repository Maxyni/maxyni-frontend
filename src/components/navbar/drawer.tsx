"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LiaTimesSolid } from "react-icons/lia"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import { FaHouse } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs"
import { IoLanguage, IoSparklesSharp } from "react-icons/io5"
import { useLocale, useTranslations } from "next-intl"
import { setCookie } from "@/lib/cookies"
import { GrDown } from "react-icons/gr"
import { useRouter } from "next/navigation"
import { BiLoaderAlt } from "react-icons/bi"
import { Locale, locales } from "../i18n/language-select"
import Link from "next/link"
import Logo from "../svg/logo"
import ReactCountryFlag from "react-country-flag"

export default function Drawer() {
    const t = useTranslations("navbar")
    const router = useRouter()

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
            }
        }
        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    useEffect(() => {
        if (window.location.hash === "#nav") {
            setOpen(true)
        }
    }, [])

    const drawerVariants = {
        open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
        closed: { x: "100%", opacity: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
    }

    // Language select - Start
    const [langDropdownOpen, setLangDropdownOpen] = useState(false)

    const usingLocaleCode = useLocale()
    const usingLocale = locales.find((locale) => locale.code === usingLocaleCode) || locales[0]

    const [changingLocale, setChangingLocale] = useState(false)

    const handleLocaleChange = async (locale: Locale) => {
        if (usingLocale === locale) return

        try {
            setChangingLocale(true)
            setLangDropdownOpen(false)

            await setCookie("i18n@locale", locale.code)

            router.replace(`/?loc=${locale.code}`, { scroll: false })
        } catch (error: any) {
            window.alert(`Error while changing the locale: ${error}`)
        } finally {
            setOpen(false)
            setChangingLocale(false)
        }
    }

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setLangDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (open) {
            setLangDropdownOpen(false)
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            setLangDropdownOpen(false)
            document.body.classList.remove("overflow-hidden")
        }
    }, [open])
    // Language select - End

    return (
        <div className="flex items-center relative">
            <button
                className="relative text-stone-900 text-3xl sm:hidden focus:outline-none"
                aria-label={t("menu.navigation_title")}
                onClick={() => {
                    setOpen(true)
                    router.push("#nav", { scroll: false })
                }}
            >
                <HiMiniBars3BottomLeft className="mr-2 mb-1" />
                <span className="absolute -bottom-2 -right-1 p-1 text-xl">
                    <IoLanguage />
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setOpen(false)
                                router.push("/", { scroll: false })
                            }}
                        />

                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={drawerVariants}
                            className="fixed top-0 right-0 w-2/3 h-full bg-[#F1F7FD] z-50 p-5 shadow-lg"
                        >
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <div className="w-full flex items-center gap-2">
                                    <Logo width={60} height={60} />
                                    <span className="w-full text-left text-2xl font-bold whitespace-nowrap">{t("brand_name")}</span>
                                </div>

                                <button
                                    className="text-black text-3xl focus:outline-none"
                                    onClick={() => {
                                        setOpen(false)
                                        router.push("/", { scroll: false })
                                    }}
                                >
                                    <LiaTimesSolid />
                                </button>
                            </div>

                            <div className="flex flex-col items-start justify-between h-full">
                                <nav className="w-full flex flex-col items-start justify-start gap-4">
                                    <div className="w-full flex items-center justify-between gap-2">
                                        <h3 className="text-lg font-medium">{t("menu.navigation_title")}</h3>
                                        <hr className="w-full border-gray-300" />
                                    </div>

                                    <div className="flex flex-col gap-4 items-start justify-start">
                                        <Link
                                            href="#start"
                                            className="flex flex-row gap-2 items-center justify-center text-xl px-2 py-3 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                            aria-label={t("home.aria_label")}
                                            onClick={() => setOpen(false)}
                                        >
                                            <FaHouse /> {t("home.text")}
                                        </Link>

                                        <Link
                                            href="#about"
                                            className="flex flex-row gap-2 items-center justify-center text-xl px-2 py-3 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                            aria-label={t("about.aria_label")}
                                            onClick={() => setOpen(false)}
                                        >
                                            <BsPeopleFill /> {t("about.text")}
                                        </Link>

                                        <Link
                                            href="#solutions"
                                            className="flex flex-row gap-2 items-center justify-center text-xl px-2 py-3 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                            aria-label={t("solutions.aria_label")}
                                            onClick={() => setOpen(false)}
                                        >
                                            <IoSparklesSharp /> {t("solutions.text")}
                                        </Link>
                                    </div>
                                </nav>

                                <div className="w-full flex flex-col gap-4 pb-16">
                                    <div className="w-full flex items-center justify-between gap-2">
                                        <h3 className="text-lg font-medium">{t("menu.language_title")}</h3>
                                        <hr className="w-full border-gray-300" />
                                    </div>

                                    <AnimatePresence>
                                        {langDropdownOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute bottom-20 right-5 mt-4 w-44 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden"
                                            >
                                                {locales.map((locale) => (
                                                    <motion.li
                                                        key={locale.code}
                                                        aria-disabled={usingLocale === locale}
                                                        onClick={() => handleLocaleChange(locale)}
                                                        className={`flex items-center gap-4 px-4 py-2 cursor-pointer aria-disabled:cursor-not-allowed transition-all duration-300 ${usingLocale === locale ? "bg-gray-100" : ""}`}
                                                        whileHover={{ scale: (usingLocale === locale) ? 1 : 1.02 }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <ReactCountryFlag
                                                                countryCode={locale.code.split("-")[1].toUpperCase()}
                                                                title={locale.countryName}
                                                                style={{ width: "2em", height: "2em" }}
                                                                svg
                                                            />
                                                            <span>{locale.languageName}</span>
                                                        </div>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>

                                    <div
                                        ref={containerRef}
                                        className={`w-full flex items-center justify-between px-4 py-2 cursor-pointer aria-disabled:cursor-not-allowed transition-all duration-300 bg-gray-200 rounded-lg`}
                                        onClick={() => {
                                            if (changingLocale) return
                                            setLangDropdownOpen(!langDropdownOpen)
                                        }}
                                        aria-disabled={changingLocale}
                                    >
                                        <div className="flex items-center gap-2">
                                            <ReactCountryFlag
                                                countryCode={usingLocale.code.split("-")[1].toUpperCase()}
                                                title={usingLocale.countryName}
                                                style={{ width: "2em", height: "2em" }}
                                                svg
                                            />
                                            <span>{usingLocale.languageName}</span>
                                        </div>

                                        {changingLocale ? <BiLoaderAlt className="animate-spin" size={18} /> : <GrDown size={18} className={`transition-all duration-300 ${langDropdownOpen && "transform rotate-180"}`} />}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}