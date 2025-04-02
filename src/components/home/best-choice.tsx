import Section from "@/components/section"
import SupportIcon from "../../../public/support-icon.png"
import CustomizationIcon from "../../../public/customization-icon.png"
import ExcellenceIcon from "../../../public/excellence-icon.png"
import Image from "next/image"
import React from "react"
import { getTranslations } from "next-intl/server"

export default async function BestChoice() {
    const t = await getTranslations("best_choice")

    return (
        <Section id="best-choice" className="flex flex-col 2xl:flex-row items-center justify-center gap-10 2xl:gap-20">
            <div className="w-[90%] lg:w-[420px] mt-2 text-center lg:text-left">
                <h1 className="w-full lg:w-[420px] text-4xl lg:text-5xl font-bold leading-snug">
                    {t.rich("title", {
                        span: (text) => <span className="bg-gradient-to-r from-[#4682B4] to-[#4B0082] bg-clip-text text-transparent">{text}</span>
                    })}
                </h1>

                <p className="text-base font-light mt-4">
                    {t.rich("description", {
                        strong: (text) => <strong>{text}</strong>
                    })}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col items-center">
                    <Image
                        src={SupportIcon}
                        alt={t("support.icon_alt")}
                        quality={100}
                        className="z-10 max-w-[150px] mb-2"
                    />

                    <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                        <h1 className="text-center text-lg font-bold mb-1">{t("support.title")}</h1>
                        <p className="text-center">{t("support.description")}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src={CustomizationIcon}
                        alt={t("customization.icon_alt")}
                        quality={100}
                        className="z-10 max-w-[150px] mb-2"
                    />

                    <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                        <h1 className="text-center text-lg font-bold mb-1">{t("customization.title")}</h1>
                        <p className="text-center text-medium">{t("customization.description")}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src={ExcellenceIcon}
                        alt={t("excellence.icon_alt")}
                        quality={100}
                        className="z-10 max-w-[150px] mb-2"
                    />

                    <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                        <h1 className="text-center text-lg font-bold mb-1">{t("excellence.title")}</h1>
                        <p className="text-center text-medium">{t("excellence.description")}</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}