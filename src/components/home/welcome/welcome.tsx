import Link from "next/link"
import Section from "../../section"
import WelcomeRocket from "./welcome-rocket"
import { getTranslations } from "next-intl/server"
import { BsRocketTakeoff } from "react-icons/bs"

export default async function Welcome() {
    const t = await getTranslations("welcome")

    return (
        <Section id="welcome" className="welcome-3d-container">
            <div className="welcome-3d-block floating flex flex-col lg:flex-row items-center justify-center w-full h-auto lg:h-[400px] px-10 py-10 bg-gradient-to-r from-[#9A35E4] to-[#4682B4] rounded-t-[48px] rounded-bl-[48px] rounded-br-[250px] relative overflow-hidden">
                {/* Gradient overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
                
                <div className="max-w-xl w-full lg:w-[36rem] text-left relative z-10">
                    <h1 className="text-white font-extrabold uppercase text-4xl lg:text-5xl">
                        {t("title")}
                    </h1>

                    <div className="flex flex-col what-we-do mt-2 gap-1">
                        <div>
                            <p className="text-white text-medium">
                                {t("description_1")}
                            </p>

                            <p className="text-white text-medium hidden xl:block">
                                {t("description_2")}
                            </p>
                        </div>

                        <p className="text-white text-medium">
                            {t.rich("description_3", {
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
                            <BsRocketTakeoff size={18} />
                            <span className="font-semibold">{t("takeoff_button_text")}</span>
                        </Link>
                    </div>
                </div>

                <div className="relative z-10">
                    <WelcomeRocket />
                </div>
            </div>
        </Section>
    )
}