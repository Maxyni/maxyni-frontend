import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { HiOutlineHome } from "react-icons/hi"

export default async function NotFound() {
    const t = await getTranslations("notFound")

    return (
        <div className="flex flex-col gap-24 md:mt-10 md:px-10">
            <section className="container mx-auto px-4">
                <div className="welcome-3d-block floating flex flex-col items-center justify-center w-full min-h-[400px] px-10 py-16 bg-gradient-to-r from-[#9A35E4] to-[#4682B4] rounded-[48px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                        <h1 className="text-white font-extrabold text-8xl md:text-9xl lg:text-[12rem] leading-none drop-shadow-lg">
                            404
                        </h1>

                        <h2 className="text-white font-bold uppercase text-2xl md:text-3xl lg:text-4xl mt-4">
                            {t("title")}
                        </h2>

                        <p className="text-white/90 text-base md:text-lg max-w-md mt-4">
                            {t("description")}
                        </p>

                        <div className="relative h-12 w-52 rounded-xl group mt-8">
                            <div className="absolute inset-0 shadow-white shadow-md bg-sky-300 transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                            <Link
                                href="/"
                                className="relative flex items-center gap-2 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10"
                            >
                                <HiOutlineHome size={20} />
                                <span className="font-semibold">{t("button_text")}</span>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                    <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-white/5 blur-lg"></div>
                </div>
            </section>
        </div>
    )
}