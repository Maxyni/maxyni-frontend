'use client';

import Link from 'next/link';

import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';
import Drawer from './drawer';
import { useCallback, useEffect, useState } from 'react';
import Modal, { DataType } from '../modal';
import PhoneInput from '../inputs/phone-input';

export function NavBar() {
    // Contact Maxyni modal - Start
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#contact') {
            document.getElementById('start')?.scrollIntoView();
            setModalIsOpen(true);
        }
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameInputError, setNameInputError] = useState(false);
    const [emailInputError, setEmailInputError] = useState(false);
    const [phoneInputError, setPhoneInputError] = useState(false);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
        setNameInputError(!newName);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailInputError(!newEmail);
    }, []);

    const handlePhoneChange = useCallback((phone: string) => {
        setPhone(phone);
        setPhoneInputError(!phone);
    }, []);

    const handleContactSubmit = useCallback((data: DataType): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 1000);
        });
    }, [])
    // Contact Maxyni modal - End

    // Sticky navbar - Start
    const [isSticky, setIsSticky] = useState(false); // State to control the navbar style - sticky or not.

    /**
     * Handle the scroll event to change the navbar style.
     */
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
    // Sticky navbar - End

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
                        title="Entrar em contato conosco"
                        externalOpenState={modalIsOpen}
                        buttonToOpen={
                            <div className="relative h-12 w-40 rounded-xl group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#73BFFF] to-[#9A35E4] transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                                <Link
                                    href="#contact"
                                    className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10"
                                >
                                    <RiContactsLine className='text-lg' />
                                    <p>Fale conosco</p>
                                </Link>
                            </div>
                        }
                        className='relative w-screen h-screen sm:h-auto sm:w-[40%]'
                        onClose={() => {
                            window.location.hash = '';
                            setEmailInputError(false);
                            setNameInputError(false);
                            setPhoneInputError(false);
                            setModalIsOpen(false);
                        }}
                        submitButtonText='Entrar em contato'
                        onSubmit={handleContactSubmit}
                    >
                        <div className='relative flex flex-col'>
                            <label htmlFor="name">Nome completo {nameInputError && <span className='text-red-500'>*</span>}</label>
                            <input
                                value={name}
                                onChange={handleNameChange}
                                onBlur={() => setNameInputError(!name)}
                                type="text"
                                name='name'
                                placeholder='Como podemos lhe chamar?'
                                className={`${nameInputError ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                required
                            />
                            {nameInputError && <p className='text-red-500 text-xs'>Campo obrigatório</p>}
                        </div>

                        <div className='relative flex flex-col'>
                            <label htmlFor="email">E-mail corporativo {emailInputError && <span className='text-red-500'>*</span>}</label>
                            <input
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={() => setEmailInputError(!email)}
                                type="email"
                                name='email'
                                placeholder='Como podemos entrar em contato?'
                                className={`${emailInputError ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                required
                            />
                            {emailInputError && <p className='text-red-500 text-xs'>Campo obrigatório</p>}
                        </div>

                        <PhoneInput
                            phone={phone}
                            onChange={handlePhoneChange}
                            onBlur={() => setPhoneInputError(!phone)}
                            isInError={phoneInputError}
                            required
                        />

                        <p className='mt-2 font-light text-gray-500'>Ao enviar o formulário, concordo com a <Link href={"#compliance"} target='_blank' className='font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Política de privacidade</Link>.</p>
                    </Modal>
                    <Drawer />
                </div>
            </nav>
        </div>
    );
}