'use client';

import Link from 'next/link';

import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';
import Drawer from './drawer';
import { useEffect, useState } from 'react';

export function NavBar() {
    const window = globalThis.window;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id='start' className={`px-4 md:px-14 w-full ${isSticky ? "fixed shadow-lg bg-white" : "relative"} z-50 flex transition-all duration-300`}>
            <nav className={`w-full flex justify-between items-center ${isSticky ? "py-0" : "py-5"}`}>
                <div className='flex items-center gap-12'>
                    <Link href={""}>
                        <LogoIcon width={isSticky ? 50 : 85} height={80} />
                    </Link>

                    <ul className='sm:flex gap-6 hidden'>
                        <li>
                            <Link href={"#start"} className='nav-link'>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href={"#about"} className='nav-link'>
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link href={"#solutions"} className='nav-link'>
                                Soluções
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>
                    <div className="relative h-12 w-40 rounded-xl group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#73BFFF] to-[#9A35E4] transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                        <Link
                            href={"mailto:suporte@maxyni.com.br"}
                            className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10"
                        >
                            <RiContactsLine className='text-lg' />
                            <p>Fale conosco</p>
                        </Link>
                    </div>

                    <Drawer />
                </div>
            </nav>
        </div>
    );
}