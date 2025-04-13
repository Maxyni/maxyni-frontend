"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function SolutionsCards() {
    const t = useTranslations("solutions.cards")
    
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
        <div className="flex flex-col md:flex-row gap-8 w-full">
            <motion.div
                className="flex flex-col items-center flex-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
            >
                <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4B0082] to-[#4682B4] flex items-center justify-center mb-3 shadow-lg z-10"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 w-full -mt-10 pt-12 h-[260px] flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                    <h3 className="font-bold text-center text-[#4B0082] mb-4 text-lg">{t("institutional_sites.title")}</h3>
                    <p className="text-sm text-center text-gray-600 flex-grow min-h-[70px]">
                        {t("institutional_sites.description")}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-medium">{t("institutional_sites.ideal_for_prefix")}</span> {t("institutional_sites.ideal_for")}
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center flex-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
            >
                <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4682B4] to-[#73BFFF] flex items-center justify-center mb-3 shadow-lg z-10"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 w-full -mt-10 pt-12 h-[260px] flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                    <h3 className="font-bold text-center text-[#4682B4] mb-4 text-lg">{t("ecommerce.title")}</h3>
                    <p className="text-sm text-center text-gray-600 flex-grow min-h-[70px]">
                        {t("ecommerce.description")}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-medium">{t("ecommerce.ideal_for_prefix")}</span> {t("ecommerce.ideal_for")}
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center flex-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
            >
                <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#9A35E4] to-[#4B0082] flex items-center justify-center mb-3 shadow-lg z-10"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 w-full -mt-10 pt-12 h-[260px] flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                    <h3 className="font-bold text-center text-[#9A35E4] mb-4 text-lg">{t("web_systems.title")}</h3>
                    <p className="text-sm text-center text-gray-600 flex-grow min-h-[70px]">
                        {t("web_systems.description")}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-medium">{t("web_systems.ideal_for_prefix")}</span> {t("web_systems.ideal_for")}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}