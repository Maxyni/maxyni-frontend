"use client"

import { motion } from "framer-motion"
import { Controller, Control } from "react-hook-form"
import { useTranslations } from "next-intl"

type PhoneInputProps = {
    control: Control<any>
    onChange?: (value: string) => void
    onBlur?: () => void
    disabled?: boolean
    errorMessage?: string
}

// Logic for formatting phone number to Brazilian pattern
const formatPhoneNumber = (input: string) => {
    if (!input) return ""
    
    // Remove all non-numeric characters
    let cleaned = input.replace(/\D/g, "")
    
    // Limit to a maximum of 11 digits (Brazilian pattern)
    cleaned = cleaned.substring(0, 11)
    
    // Format according to Brazilian pattern
    if (cleaned.length <= 2) {
        return `(${cleaned}`
    } else if (cleaned.length <= 6) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`
    } else if (cleaned.length <= 10) {
        // For 8 digit numbers (without the 9th digit)
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`
    } else {
        // For 9 digit numbers (with the 9th digit)
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`
    }
}

export function PhoneInput({ control, onChange, onBlur, disabled, errorMessage }: PhoneInputProps) {
    const t = useTranslations("navbar.contact_modal.form.fields.phone")
    
    return (
        <motion.div
            layout
            className="relative flex flex-col"
        >
            <label htmlFor="phone">{t("label")} {errorMessage && <span className="text-red-500">*</span>}</label>
            <div className={`bg-white flex items-center ${errorMessage ? "border border-red-400" : "border"}  rounded-md overflow-hidden group transition duration-300 ease-in-out focus-within:border-[#9800b6]`}>
                <span className="pl-2 pr-2 text-sm font-medium">{t("country_code")}</span>
                <Controller
                    name="phone"
                    control={control}
                    disabled={disabled}
                    render={({ field }) => (
                        <input
                            id="phone"
                            type="text"
                            value={field.value}
                            disabled={disabled}
                            placeholder={t("placeholder")}
                            className="flex-1 px-2 py-2 outline-none"
                            onChange={(e) => {
                                const formatted = formatPhoneNumber(e.target.value)
                                field.onChange(formatted)
                                onChange?.(formatted)
                            }}
                            onBlur={onBlur}
                        />
                    )}
                />
            </div>

            {errorMessage &&
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-red-500 text-xs ml-1"
                >
                    {errorMessage}
                </motion.p>
            }
        </motion.div>
    )
}