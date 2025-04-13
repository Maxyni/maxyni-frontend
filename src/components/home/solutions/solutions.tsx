import React from "react"
import Section from "@/components/section"
import Image from "next/image"
import MaxyniSolutionsImage from "../../../../public/maxyni-solutions.png"
import SolutionsCards from "./solutions-cards"
import { getTranslations } from "next-intl/server"

export default async function Solutions() {
    const t = await getTranslations("solutions")

    return (
        <Section id="solutions" className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-32">
            <Image
                src={MaxyniSolutionsImage}
                alt={t("person_img_alt")}
                quality={100}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
            />

            <div className="text-center sm:text-left flex flex-col items-center sm:items-start lg:w-2/3">
                <h1 className="text-center lg:text-left text-5xl font-bold leading-tight mb-6">
                    {t.rich("title", {
                        span: (text) => <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">{text}</span>
                    })}
                </h1>

                <p className="text-base font-light mb-6 max-w-2xl">
                    {t.rich("custom_description", {
                        strong: (text) => <strong>{text}</strong>
                    })}
                </p>

                <SolutionsCards />
            </div>
        </Section>
    )
}