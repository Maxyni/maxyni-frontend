import Section from "@/components/section"
import AboutMaxyniImage from "../../../public/about-maxyni.png"
import Image from "next/image"
import React from "react"
import { getTranslations } from "next-intl/server"

export default async function About() {
    const t = await getTranslations("about")

    return (
        <Section id="about" className="flex lg:flex-row flex-col items-center justify-center gap-10 2xl:gap-20">
            <Image
                src={AboutMaxyniImage}
                alt={t("person_img_alt")}
                quality={100}
                className="w-full md:w-2/6"
            />

            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <h1 className="text-center lg:text-left text-5xl font-bold leading-tight">
                    {t.rich("title", {
                        span: (children) => <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">{children}</span>
                    })}
                </h1>

                <div className="flex flex-col gap-6 mt-4">
                    <p className="text-base font-light">
                        {t.rich("description_1", {
                            strong: (text) => <strong>{text}</strong>
                        })}
                    </p>

                    <p className="text-base font-light">
                        {t.rich("description_2", {
                            strong: (text) => <strong>{text}</strong>
                        })}
                    </p>

                    <p className="text-base font-light">
                        {t.rich("description_3", {
                            strong: (text) => <strong>{text}</strong>
                        })}
                    </p>
                </div>
            </div>
        </Section>
    )
}