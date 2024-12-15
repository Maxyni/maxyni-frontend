'use client';

import Link from 'next/link';

import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';
import Drawer from './drawer';
import { useCallback, useEffect, useState } from 'react';
import Modal, { DataType } from '../modal';
import PhoneInput from '../inputs/phone-input';

export function NavBar() {
    const window = globalThis.window;
    const [isSticky, setIsSticky] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#contact') {
            document.getElementById('start')?.scrollIntoView();
            setModalIsOpen(true);
        }
    }, []);

    const [isEmailError, setIsEmailError] = useState()

    const handleContactSubmit = useCallback((data: DataType): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.name && data.email && data.message) {
                    console.log('Contact data submitted:', data);
                    resolve(true);
                } else {
                    reject(false);
                }
            }, 1000);
        });
    }, [])

    // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

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
        <div id='start' className={`px-4 md:px-14 w-full ${isSticky ? "fixed shadow-lg bg-white" : "relative"} z-20 flex transition-all duration-300`}>
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

                    <Modal
                        title="Contate um especialista"
                        externalOpenState={modalIsOpen}
                        buttonToOpen={
                            <div className="relative h-12 w-40 rounded-xl group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#73BFFF] to-[#9A35E4] transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                                <Link
                                    href={"#contact"}
                                    className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10"
                                >
                                    <RiContactsLine className='text-lg' />
                                    <p>Fale conosco</p>
                                </Link>
                            </div>
                        }
                        className='relative w-screen h-screen sm:h-[70vh] sm:w-[40%]'
                        onClose={() => {
                            window.location.hash = '';
                            setModalIsOpen(false);
                        }}
                        submitButtonText='Enviar'
                        onSubmit={handleContactSubmit}
                    >
                        <div className='relative flex flex-col'>
                            <label htmlFor="name">Nome <span className='text-red-500'>*</span></label>
                            <input onBlur={} type="text" name='name' placeholder='Como podemos lhe chamar?' className='px-3 py-2 rounded-md border outline-none transition duration-300 ease-out focus:border-[#9800b6]' />
                        </div>
                        <div className='relative flex flex-col'>
                            <label htmlFor="email">E-mail corporativo <span className='text-red-500'>*</span></label>
                            <input type="email" name='email' placeholder='Podemos entrar em contato por onde?' className='px-3 py-2 rounded-md border outline-none transition duration-300 ease-out focus:border-[#9800b6]' />
                        </div>
                        <PhoneInput />
                        <p className='mt-2 font-light text-gray-500'>Ao enviar o formulário, concordo com a <Link href={"/#compliance"} className='font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Política de privacidade</Link>.</p>
                    </Modal>
                    <Drawer />
                </div>
            </nav>
        </div>
    );
}