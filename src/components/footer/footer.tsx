import Logo from "../svg/logo"
import { BsGithub, BsInstagram } from "react-icons/bs"
import { getTranslations } from "next-intl/server"
import FooterCompliance from "./footer-compliance"
import Link from "next/link"

export default async function Footer() {
    const t = await getTranslations("footer")

    return (
        <footer id="footer" className="mt-28 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-col md:gap-4">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Logo width={50} height={50} />
                            <div className="flex flex-col items-start justify-start text-left">
                                <span className="text-2xl font-semibold whitespace-nowrap">Maxyni</span>
                                <p className="text-xs text-gray-500">{t("slogan")}</p>
                            </div>
                        </Link>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 mt-4">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">{t("links.company_text")}</a>
                        </li>
                        <li>
                            <FooterCompliance />
                        </li>

                        <li className="flex">
                            <a href="https://github.com/Maxyni" target="_blank" className="me-4 md:me-6"><BsGithub /></a>
                        </li>
                        <li className="flex">
                            <a href="https://instagram.com/MaxyniSistemas" target="_blank" className="me-4 md:me-6"><BsInstagram /></a>
                        </li>
                    </ul>
                </div>

                <hr className="mt-6 border-gray-200 sm:mx-auto lg:my-8" />

                <span className="block text-sm text-gray-500 text-center py-6 md:py-0">
                    {t.rich("rights", {
                        Link: (text) => <Link href="/" className="hover:underline">{text}</Link>,
                        year: `${new Date().getFullYear()}`
                    })}
                </span>
            </div>
        </footer>
    )
}