"use client"

import React from "react"
import { motion } from "framer-motion"
import { Controller, Control } from "react-hook-form"
import { useTranslations } from "next-intl"

type PhoneInputProps = {
    control?: Control<any>
    onChange?: (formattedNumber: string) => void
    onBlur?: () => void
    disabled?: boolean
    errorMessage?: string
}

export function PhoneInput({ control, onChange, onBlur, disabled, errorMessage }: PhoneInputProps) {
    const t = useTranslations("navbar.contact_modal.form.fields.phone")

    const formatPhoneNumber = (original: string): string => {
        const value = original.replace(/\D/g, "").slice(0, 11)

        if (value.length === 0) return ""
        if (value.length <= 2) return `(${value}`
        if (value.length <= 6) return `(${value.slice(0, 2)}) ${value.slice(2)}`

        const isCellPhone = value.length === 11 && value[2] === "9"
        const mid = isCellPhone ? 7 : 6
        return `(${value.slice(0, 2)}) ${value.slice(2, mid)}-${value.slice(mid)}`
    }

    return (
        <motion.div layout className="relative flex flex-col">
            <label htmlFor="number">{t("label")} {errorMessage && <span className="text-red-500">*</span>}</label>
            <div className={`bg-white flex items-center ${errorMessage ? "border border-red-400" : "border"}  rounded-md overflow-hidden group transition duration-300 ease-in-out focus-within:border-[#9800b6]`}>
                <span className="pl-2 pr-2 text-sm font-medium">+55</span>
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
                            placeholder="(00) 00000-0000"
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