import React from "react"
import Image from "next/image"
import Section from "@/components/section"
import SolutionsCards from "./solutions-cards"
import MaxyniSolutionsImage from "../../../../public/images/maxyni-solutions.png"
import { getTranslations } from "next-intl/server"

export default async function Solutions() {
    const t = await getTranslations("solutions")

    return (
        <Section id="solutions" className="flex flex-col 2xl:flex-row text-center items-center justify-center gap-10">
            <Image
                src={MaxyniSolutionsImage}
                alt={t("person_img_alt")}
                quality={100}
                className="w-full md:w-2/6 block 2xl:hidden"
            />

            <div className="px-5 md:px-0 flex flex-col items-center">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                    {t.rich("title", {
                        span: (text) => <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">{text}</span>
                    })}
                </h1>

                <p className="text-base font-light max-w-2xl mb-6">
                    {t.rich("custom_description", {
                        strong: (text) => <strong>{text}</strong>
                    })}
                </p>

                <SolutionsCards />
            </div>

            <Image
                src={MaxyniSolutionsImage}
                alt={t("person_img_alt")}
                quality={100}
                className="w-full md:w-2/6 hidden 2xl:block"
            />
        </Section>
    )
}