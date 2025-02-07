"use client"

import { useEffect, useRef, useState } from "react"
import { IoLanguage } from "react-icons/io5"
import { getCookie, setCookie } from "@/lib/cookies"
import { motion, AnimatePresence } from "framer-motion"
import ReactCountryFlag from "react-country-flag"

type LanguageSelectProps = {
    hideSelect: boolean
}

export function LanguageSelect({ hideSelect }: LanguageSelectProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const locales = (process.env.NEXT_PUBLIC_AVAILABLE_LOCALES as string).split(",")
    const [usingLocale, setUsingLocale] = useState("")

    const handleLocaleChange = async (locale: string) => {
        await setCookie("i18n@locale", locale)
        setUsingLocale(locale)
        setDropdownOpen(false)
    }

    function getLocaleJSX(code: string) {
        switch (code) {
            case "pt-BR":
                return <>
                    <ReactCountryFlag
                        countryCode="BR"
                        title="Brasil"
                        style={{ width: '2em', height: '2em' }}
                        svg
                    />
                    <span>Português</span>
                </>
            case "en-US":
                return <>
                    <ReactCountryFlag
                        countryCode="US"
                        title="United States"
                        style={{ width: '2em', height: '2em' }}
                        svg
                    />
                    <span>English</span>
                </>
            default:
                return code
        }
    }

    useEffect(() => {
        const updateLocale = async () => {
            const locale = await getCookie("i18n@locale")
            if (locale) {
                setUsingLocale(locale)
            } else {
                const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string
                await setCookie("i18n@locale", defaultLocale)
                setUsingLocale(defaultLocale)
            }
        }

        updateLocale()
    }, [])

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
        <div ref={containerRef} className={`${hideSelect ? "hidden" : "block"} relative`}>
            <motion.button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center p-3 rounded-xl border border-gray-300 bg-white text-black shadow-md hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <IoLanguage className="text-lg" />
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
                                key={locale}
                                onClick={() => handleLocaleChange(locale)}
                                className={`flex items-center gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 ${usingLocale === locale ? "bg-gray-100" : ""}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                {getLocaleJSX(locale)}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}