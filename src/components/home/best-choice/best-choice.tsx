import React from "react"
import Section from "@/components/section"
import BestChoiceCards from "./best-choice-cards"
import SupportIcon from "../../../../public/images/support-icon.png"
import CustomizationIcon from "../../../../public/images/customization-icon.png"
import ExcellenceIcon from "../../../../public/images/excellence-icon.png"
import { getTranslations } from "next-intl/server"

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
        <Section id="best-choice" className="flex text-center items-center justify-center">
            <div className="px-5 md:px-0 flex flex-col 2xl:flex-row items-center 2xl:items-start gap-10 2xl:gap-20">
                <div className="w-full 2xl:w-[30%] flex flex-col items-center gap-6 2xl:mt-12">
                    <h1 className="text-4xl lg:text-5xl font-bold max-w-lg">
                        {t.rich("title", {
                            span: (text) => <span className="bg-gradient-to-r from-[#4682B4] to-[#4B0082] bg-clip-text text-transparent">{text}</span>
                        })}
                    </h1>

                    <p className="text-base font-light max-w-xl 2xl:max-w-none">
                        {t.rich("description", {
                            strong: (text) => <strong>{text}</strong>
                        })}
                    </p>
                </div>

                <BestChoiceCards cards={cards} className="w-full 2xl:w-[70%]" />
            </div>
        </Section>
    )
}