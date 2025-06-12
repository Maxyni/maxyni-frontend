"use client"

import ReactCountryFlag from "react-country-flag"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { setCookie } from "@/lib/cookies"
import { useLocale } from "next-intl"
import { RiLoader5Fill } from "react-icons/ri"
import { IoLanguage } from "react-icons/io5"

// Exports - Start
export type LocaleCode = "pt-BR" | "en-US" | "es-ES" | "fr-FR" | "de-DE"
export type Locale = {
    code: LocaleCode
    countryName: string
    languageName: string
}

export const locales: Locale[] = [
    { code: "pt-BR", countryName: "Brasil", languageName: "Português" },
    { code: "en-US", countryName: "United States", languageName: "English" },
    { code: "es-ES", countryName: "España", languageName: "Español" },
    { code: "fr-FR", countryName: "France", languageName: "Français" },
    { code: "de-DE", countryName: "Germany", languageName: "Deutsch" }
]
// Exports - End

type LanguageSelectProps = {
    hideSelect: boolean
}

export function LanguageSelect({ hideSelect }: LanguageSelectProps) {
    const router = useRouter()

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const usingLocaleCode = useLocale()
    const usingLocale = locales.find((locale) => locale.code === usingLocaleCode) || locales[0]

    const [changingLocale, setChangingLocale] = useState(false)

    const handleLocaleChange = async (locale: Locale) => {
        if (usingLocale === locale) return

        try {
            setChangingLocale(true)
            setDropdownOpen(false)

            // fake delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            await setCookie("i18n@locale", locale.code)

            router.replace(`/?loc=${locale.code}`, { scroll: false })
        } catch (error: any) {
            window.alert(`Error while changing the locale: ${error}`)
        } finally {
            setChangingLocale(false)
        }
    }

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={containerRef} className={`relative hidden ${!hideSelect && "sm:block"}`}>
            <div className="relative h-12 w-12 rounded-xl group">
                <div className={`${changingLocale ? "hidden" : "absolute"} inset-0 bg-gradient-to-r from-[#73BFFF] to-[#9A35E4] transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.1] group-hover:scale-y-[1.1] rounded-xl ${dropdownOpen && "scale-x-[1.1] scale-y-[1.1]"}`} />
                <button
                    disabled={changingLocale}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="relative flex items-center justify-center w-full h-full rounded-xl bg-white text-black shadow-2xl z-10 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {changingLocale ? <RiLoader5Fill size={18} className="animate-spin" /> : <IoLanguage size={18} />}
                </button>
            </div>

            <AnimatePresence>
                {dropdownOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-4 w-40 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden"
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
        </div>
    )
}