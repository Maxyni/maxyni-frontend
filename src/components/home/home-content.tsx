"use client"

import { Section } from "../section"
import { Solutions } from "./solutions"
import { BestChoice } from "./best-choice"
import { About } from "./about"
import { BsRocketTakeoff } from "react-icons/bs"
import { useState } from "react"
import { useTranslations } from "next-intl"
import RocketImage from "../../../public/rocket.png"
import Image from "next/image"
import Link from "next/link"

export function HomeContent() {
    const t = useTranslations("home")

    const [isRocketFloating, setIsRocketFloating] = useState(false)

    return (
        <Section id="home" className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto lg:h-[400px] px-10 py-10 bg-gradient-to-r from-[#9A35E4] to-[#4682B4] rounded-t-[48px] rounded-bl-[48px] rounded-br-[250px]">
                <div className="max-w-xl w-full lg:w-[36rem] text-left">
                    <h1 className="text-white font-extrabold text-4xl lg:text-5xl lg:w-[95%]">
                        {t("welcome_title")}
                    </h1>

                    <div className="flex flex-col what-we-do mt-2 gap-1">
                        <div>
                            <p className="text-white text-medium">
                                {t("welcome_description_1")}
                            </p>

                            <p className="text-white text-medium hidden xl:block">
                                {t("welcome_description_2")}
                            </p>
                        </div>

                        <p className="text-white text-medium">
                            {t.rich("welcome_description_3", {
                                strong: (text) => <strong className="text-white">{text}</strong>
                            })}
                        </p>
                    </div>

                    <div className="relative h-12 w-40 rounded-xl group mt-5">
                        <div className="absolute inset-0 shadow-white shadow-md bg-sky-300 transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                        <Link
                            href="#solutions"
                            className="relative flex items-center gap-2 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10"
                        >
                            <BsRocketTakeoff />
                            <strong>{t("takeoff_button_text")}</strong>
                        </Link>
                    </div>
                </div>

                <div
                    className={`hidden lg:block animate-[rocketEntry_1.5s_ease-out_forwards] ${isRocketFloating && "animate-[rocketFloat_3s_ease-in-out_infinite]"}`}
                    onAnimationEnd={() => setIsRocketFloating(true)} // When the rocket entry animation ends, starts the floating animation.
                >
                    <Image
                        src={RocketImage}
                        alt="Foguete voando de lado para cima."
                        quality={100}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-24 mt-10">
                <About />
                <BestChoice />
                <Solutions />
            </div>
        </Section>
    )
}