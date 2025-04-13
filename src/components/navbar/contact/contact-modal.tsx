"use client"

import Modal from "../../ui/modal"
import { PhoneInput } from "./phone-input"
import ContactSubmitedIcon from "../../../../public/contact-submited-icon.png"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import axios from "axios"

type ContactModalProps = {
    open: boolean
    setOpen: (open: boolean) => void
}

export function ContactModal({ open, setOpen }: ContactModalProps) {
    const t = useTranslations("navbar.contact_modal")
    const router = useRouter()

    const submitContactSchema = z.object({
        fullName: z
            .string({ message: t("form.fields.full_name.errors.nonempty") })
            .nonempty({ message: t("form.fields.full_name.errors.nonempty") })
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/, { message: t("form.fields.full_name.errors.regex") }),
        email: z
            .string({ message: t("form.fields.email.errors.nonempty") })
            .nonempty({ message: t("form.fields.email.errors.nonempty") })
            .email({ message: t("form.fields.email.errors.regex") }),
        phone: z
            .string({ message: t("form.fields.phone.errors.nonempty") })
            .nonempty({ message: t("form.fields.phone.errors.nonempty") })
            .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: t("form.fields.phone.errors.regex") })
    })
    type SubmitContactForm = z.infer<typeof submitContactSchema>

    const { register, control, handleSubmit, formState: { errors }, clearErrors, trigger } = useForm<SubmitContactForm>({
        resolver: zodResolver(submitContactSchema),
        defaultValues: { phone: "" }
    })

    const [submitting, setSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const onSubmit = async (data: SubmitContactForm) => {
        setSubmitting(true)
        setSubmitSuccess(false)
        setSubmitError(null)
        clearErrors()

        try {
            const response = await axios.post("/api/contact", {
                fullName: data.fullName,
                email: data.email,
                phone: data.phone
            })

            if (response.status === 200) {
                setSubmitSuccess(true)
            } else {
                setSubmitError(t("generic_error_text"))
            }
        } catch (error: any) {
            console.log("Error while submitting contact request:", error)
            setSubmitError(t("generic_error_text"))
        } finally {
            setSubmitting(false)
        }
    }

    useEffect(() => {
        if (window.location.hash === "#contact") {
            document.getElementById("start")?.scrollIntoView()
            setOpen(true)
        }
    }, [])

    return (
        <Modal
            title={t("title")}
            externalOpenState={open}
            onClose={() => {
                router.push("/", { scroll: false })
                setSubmitting(false)
                setSubmitError(null)
                clearErrors()
                setOpen(false)
            }}
            submitButtonText={t("submit_button_text")}
            submitButtonDisabled={submitting}
            handleSubmit={!submitSuccess ? handleSubmit : undefined}
            onSubmit={!submitSuccess ? onSubmit : undefined}
            closeAfterSubmit
        >
            <motion.div layout>
                {submitSuccess ? (
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src={ContactSubmitedIcon}
                            alt={t("form.sent.icon_alt")}
                            width={200}
                            height={250}
                            quality={100}
                            className="w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/3"
                        />

                        <div className="flex flex-col items-center gap-10">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl md:text-2xl font-semibold text-center">{t("form.sent.title")}</h1>
                                <p className="text-center text-sm">
                                    {t.rich("form.sent.subtitle", {
                                        strong: (text) => <strong className="font-semibold">{text}</strong>
                                    })}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-center">{t("form.sent.description_1")}</p>

                                <p className="text-center text-xs">
                                    {t.rich("form.sent.description_2", {
                                        strong: (text) => <strong className="font-semibold">{text}</strong>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <motion.div
                            layout
                            className="relative flex flex-col"
                        >
                            <label htmlFor="fullName">{t("form.fields.full_name.label")} {errors.fullName && <span className="text-red-500">*</span>}</label>
                            <input
                                disabled={submitting}
                                type="text"
                                placeholder={t("form.fields.full_name.placeholder")}
                                className={`${errors.fullName ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                {...register("fullName", {
                                    onChange: () => { clearErrors("fullName") },
                                    onBlur: () => { trigger("fullName") }
                                })}
                            />
                            {errors.fullName &&
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-red-500 text-xs ml-1"
                                >
                                    {errors.fullName.message}
                                </motion.p>
                            }
                        </motion.div>

                        <motion.div
                            layout
                            className="relative flex flex-col"
                        >
                            <label htmlFor="email">{t("form.fields.email.label")} {errors.email && <span className="text-red-500">*</span>}</label>
                            <input
                                disabled={submitting}
                                type="email"
                                placeholder={t("form.fields.email.placeholder")}
                                className={`${errors.email ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                {...register("email", {
                                    onChange: () => { clearErrors("email") },
                                    onBlur: () => { trigger("email") }
                                })}
                            />
                            {errors.email &&
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-red-500 text-xs ml-1"
                                >
                                    {errors.email.message}
                                </motion.p>
                            }
                        </motion.div>

                        <PhoneInput
                            control={control}
                            onChange={() => { clearErrors("phone") }}
                            onBlur={() => { trigger("phone") }}
                            errorMessage={errors.phone?.message}
                            disabled={submitting}
                        />

                        <motion.p
                            layout
                            className="mt-2 mb-4 font-light text-gray-500"
                        >
                            {t.rich("form.compliance_text", {
                                a: (text) => <a href="#compliance" target="_blank" className="font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">{text}</a>
                            })}
                        </motion.p>

                        {submitError &&
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="text-red-500 text-sm text-center"
                            >
                                {submitError}
                            </motion.p>
                        }
                    </div>
                )}
            </motion.div>
        </Modal>
    )
}