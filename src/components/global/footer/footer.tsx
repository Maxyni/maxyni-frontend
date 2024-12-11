import Link from "next/link";
import { LogoIcon } from "../svgs/logo-icon";

export default function Footer() {
    return (
        <footer className="mt-28 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <LogoIcon width={50} height={50}/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Maxyni</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#who" className="hover:underline me-4 md:me-6">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Política de privacidade</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2025 <Link href="/" className="hover:underline">Maxyni®</Link>. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}