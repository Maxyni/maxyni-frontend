import Section from "@/components/section"
import SupportIcon from "../../../../public/support-icon.png"
import CustomizationIcon from "../../../../public/customization-icon.png"
import ExcellenceIcon from "../../../../public/excellence-icon.png"
import React from "react"
import { getTranslations } from "next-intl/server"
import BestChoiceCards from "./best-choice-cards"

export default async function BestChoice() {
    const t = await getTranslations("best_choice")

    const cards = [
        {
            icon: SupportIcon,
            iconAlt: t("support.icon_alt"),
            title: t("support.title"),
            description: t("support.description"),
            index: 0
        },
        {
            icon: CustomizationIcon,
            iconAlt: t("customization.icon_alt"),
            title: t("customization.title"),
            description: t("customization.description"),
            index: 1
        },
        {
            icon: ExcellenceIcon,
            iconAlt: t("excellence.icon_alt"),
            title: t("excellence.title"),
            description: t("excellence.description"),
            index: 2
        }
    ]

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

            <BestChoiceCards cards={cards} />
        </Section>
    )
}