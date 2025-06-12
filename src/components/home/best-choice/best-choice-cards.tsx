"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type CardProps = {
    icon: StaticImport
    iconAlt: string
    title: string
    description: string
    index: number
}

type BesctChoiceCardsProps = {
    cards: CardProps[]
    className?: string
}

export default function BestChoiceCards({ cards, className }: BesctChoiceCardsProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    const iconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className={`flex flex-col lg:flex-row gap-5 ${className}`}>
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                >
                    <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <Image
                            src={card.icon}
                            alt={card.iconAlt}
                            quality={100}
                            className="max-w-[150px] mb-4"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col bg-white shadow-md rounded-xl w-full h-[260px] max-w-xl p-6 -mt-16 pt-12 relative z-5"
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <h3 className={`font-bold text-center mb-4 text-lg`}>{card.title}</h3>
                        <p className="text-md text-center text-gray-600 flex-grow min-h-[70px]">{card.description}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}