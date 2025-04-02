import React from "react"
import Section from "@/components/section"
import Image from "next/image"
import MaxyniSolutionsImage from "../../../public/maxyni-solutions.png"
import { getTranslations } from "next-intl/server"

export default async function Solutions() {
    const t = await getTranslations("solutions")

    return (
        <Section id="solutions" className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <Image
                src={MaxyniSolutionsImage}
                alt={t("person_img_alt")}
                quality={100}
                className="w-full md:w-3/5 lg:w-full xl:w-[80%] 2xl:w-[60%]"
            />

            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <h1 className="text-center lg:text-left text-5xl font-bold leading-tight">
                    {t.rich("title", {
                        span: (text) => <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">{text}</span>
                    })}
                </h1>

                <div className="flex flex-col gap-6 m-4">
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

                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold">{t("products.title")}</h2>

                        <ul className="list-disc list-inside">
                            <li className="font-light">
                                {t.rich("products.li_1", {
                                    strong: (text) => <strong>{text}</strong>
                                })}
                            </li>
                            <li className="font-light">
                                {t.rich("products.li_2", {
                                    strong: (text) => <strong>{text}</strong>,
                                    a: (text) => <a href="https://ahssets.com.br" target="_blank" className="hover:underline">{text}</a>
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}