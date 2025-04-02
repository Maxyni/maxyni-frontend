"use client"

import { useEffect, useRef, useState } from "react"
import { IoLanguage } from "react-icons/io5"
import { setCookie } from "@/lib/cookies"
import { motion, AnimatePresence } from "framer-motion"
import ReactCountryFlag from "react-country-flag"
import { BiLoaderAlt } from "react-icons/bi"
import { useLocale } from "next-intl"

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
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const usingLocaleCode = useLocale()
    const usingLocale = locales.find((locale) => locale.code === usingLocaleCode) || locales[0]

    const [changingLocale, setChangingLocale] = useState(false)

    const handleLocaleChange = async (locale: Locale) => {
        if (usingLocale === locale) return

        try {
            setChangingLocale(true)
            setDropdownOpen(false)

            await setCookie("i18n@locale", locale.code)
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
            <motion.button
                disabled={changingLocale}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center p-3 rounded-xl border border-gray-300 bg-white text-black shadow-md hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {changingLocale ? <BiLoaderAlt className="animate-spin" size={18} /> : <IoLanguage size={18} />}
            </motion.button>

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
                                        style={{ width: '2em', height: '2em' }}
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