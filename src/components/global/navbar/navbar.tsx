'use client';

import Link from 'next/link';

import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';
import Drawer from './drawer';
import { useCallback, useEffect, useState } from 'react';
import Modal, { DataType } from '../modal';
import PhoneInput from '../inputs/phone-input';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export function Navbar() {
    const router = useRouter();

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

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

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
        setSubmitting(true);
        setSubmitError(null);

        const { name, email, phone } = data;
        if (!name || !email || !phone) {
            // TODO: Handle the error.
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                setSubmitError('Não foi possível enviar seu formulário de contato no momento. Tente novamente mais tarde.');
                setSubmitting(false);
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
            if (window.scrollY > 80) {
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
        <>
            {/* Contact Maxyni modal - Start */}
            <Modal
                title="Fale conosco"
                externalOpenState={modalIsOpen}
                onClose={() => {
                    router.push('/', { scroll: false });
                    setEmailInputError(false);
                    setNameInputError(false);
                    setPhoneInputError(false);
                    setSubmitError(null);
                    setModalIsOpen(false);
                }}
                submitButtonText='Entrar em contato'
                onSubmit={handleContactSubmit}
                closeAfterSubmit
            >
                <motion.div
                    layout
                    className='relative flex flex-col'
                >
                    <label htmlFor="name">Nome completo {nameInputError && <span className='text-red-500'>*</span>}</label>
                    <input
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => setNameInputError(!name)}
                        disabled={submitting}
                        type="text"
                        name='name'
                        placeholder='John Doe'
                        className={`${nameInputError ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                        required
                    />
                    {nameInputError &&
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='text-red-500 text-xs ml-1'
                        >
                            Campo obrigatório.
                        </motion.p>
                    }
                </motion.div>

                <motion.div
                    layout
                    className='relative flex flex-col'
                >
                    <label htmlFor="email">E-mail corporativo {emailInputError && <span className='text-red-500'>*</span>}</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => setEmailInputError(!email)}
                        disabled={submitting}
                        type="email"
                        name='email'
                        placeholder='john.doe@exemplo.com'
                        className={`${emailInputError ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                        required
                    />
                    {emailInputError &&
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='text-red-500 text-xs ml-1'
                        >
                            Campo obrigatório.
                        </motion.p>
                    }
                </motion.div>

                <PhoneInput
                    phone={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => setPhoneInputError(!phone)}
                    disabled={submitting}
                    isInError={phoneInputError}
                    required
                />

                <motion.p
                    layout
                    className='mt-2 mb-4 font-light text-gray-500'
                >
                    Ao enviar o formulário, você concorda com a <Link href={"#compliance"} target='_blank' className='font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Política de Privacidade</Link>.
                </motion.p>

                {submitError &&
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='text-red-500 text-sm text-center'
                    >
                        {submitError}
                    </motion.p>
                }
            </Modal>
            {/* Contact Maxyni modal - End */}

            {/* Navbar */}
            <motion.div
                layout
                id='start'
                className={`px-4 md:px-14 w-full ${isSticky ? "fixed shadow-lg bg-white" : "relative"} z-20 flex`}
            >
                <nav className={`w-full flex justify-between items-center ${isSticky ? "py-0" : "py-5"}`}>
                    <div className='flex items-center gap-12'>
                        <Link href="/">
                            <LogoIcon width={isSticky ? 50 : 85} height={80} />
                        </Link>

                        <ul className='hidden sm:flex gap-6'>
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
                            <a
                                className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10 hover:cursor-pointer"
                                onClick={() => {
                                    setModalIsOpen(true);
                                    router.push('/#contact', { scroll: false });
                                }}
                            >
                                <RiContactsLine className='text-lg' />
                                <p>Fale conosco</p>
                            </a>
                        </div>

                        <Drawer />
                    </div>
                </nav>
            </motion.div>
        </>
    );
}