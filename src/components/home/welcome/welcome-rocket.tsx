"use client"

import Image from "next/image"
import RocketImage from "../../../../public/images/rocket.png"
import { useTranslations } from "next-intl"
import { motion, Variants } from "framer-motion"

export default function WelcomeRocket() {
    const t = useTranslations("welcome")

    const rocketVariants: Variants = {
        initial: {
            x: "150%",
            y: "150%",
            rotate: 20,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        },
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            className="hidden lg:block rocket-container"
            variants={rocketVariants}
            initial="initial"
            animate="animate"
            onAnimationComplete={() => {
                document.querySelector(".rocket-container")?.animate(
                    [
                        { transform: 'translateY(0px)' },
                        { transform: 'translateY(-10px)' },
                        { transform: 'translateY(0px)' }
                    ],
                    {
                        duration: 3000,
                        iterations: Infinity,
                        easing: 'ease-in-out'
                    }
                )
            }}
        >
            <Image
                src={RocketImage}
                alt={t("rocket_img_alt")}
                quality={100}
            />
        </motion.div>
    )
}