import Link from "next/link";
import { LogoIcon } from "../svgs/logo-icon";
import { BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="mt-28 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <LogoIcon width={50} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Maxyni</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">Institucional</a>
                        </li>
                        <li>
                            <a href="#privacy" className="hover:underline me-4 md:me-6">Política de privacidade</a>
                        </li>
                        
                        <li className="flex">
                            <a href="https://github.com/Maxyni" target="_blank" className="me-4 md:me-6"><BsGithub /></a>
                        </li>
                        <li className="flex">
                            <a href="https://instagram.com/MaxyniSistemas" target="_blank" className="me-4 md:me-6"><BsInstagram /></a>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center"><Link href="/" className="hover:underline">Maxyni</Link> © {(new Date).getFullYear()}. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}