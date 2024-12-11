'use client';

import Link from 'next/link';

import { Container } from '../container';
import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';

export function NavBar() {
    return (
        <Container>
            <div className="relative z-50">
                <nav className="flex justify-between items-center py-5">
                    <div className='flex items-center gap-12'>
                        <Link href={""}>
                            <LogoIcon width={85} height={80} />
                        </Link>
                        <ul className='flex gap-6'>
                            <li>
                                <Link href={"#start"} className='nav-link'>
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href={"#who"} className='nav-link'>
                                    Quem somos?
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
                            <Link href={""} className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10">
                                <RiContactsLine className='text-lg' />
                                <p>Fale conosco</p>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Container>
    );
}