"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import Image from "next/image"
import RocketImage from "../../../../public/rocket.png"

export default function WelcomeRocket() {
    const t = useTranslations("welcome")

    const [isRocketFloating, setIsRocketFloating] = useState(false)

    return (
        <div
            className={`hidden lg:block animate-[rocketEntry_1.5s_ease-out_forwards] ${isRocketFloating && "animate-[rocketFloat_3s_ease-in-out_infinite]"}`}
            onAnimationEnd={() => setIsRocketFloating(true)} // When the rocket entry animation ends, starts the floating animation.
        >
            <Image
                src={RocketImage}
                alt={t("rocket_img_alt")}
                quality={100}
            />
        </div>
    )
}