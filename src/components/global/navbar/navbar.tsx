'use client';

import Link from 'next/link';
import { LogoIcon } from '../svgs/logo-icon';
import { RiContactsLine } from 'react-icons/ri';
import Drawer from './drawer';
import { useEffect, useState } from 'react';
import Modal from '../modal';
import PhoneInput from '../inputs/phone-input';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import ContactSubmitedIcon from '../../../../public/contact-submited-icon.png';

const submitContactSchema = z.object({
    fullName: z
        .string({ message: "O nome não deve conter caracteres especiais." })
        .nonempty({ message: "Insira o seu nome completo." })
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/, { message: 'Insira um nome completo válido.' }),
    email: z
        .string()
        .nonempty({ message: 'Insira o seu e-mail corporativo.' })
        .email({ message: 'Insira um e-mail válido.' }),
    phone: z
        .string({ message: 'O número de telefone não deve conter caracteres especiais.' })
        .nonempty({ message: 'Insira o seu número de telefone.' })
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: 'Insira um número de telefone válido.' })
});

type SubmitContactForm = z.infer<typeof submitContactSchema>;

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

    const { register, control, handleSubmit, formState: { errors }, clearErrors, trigger } = useForm<SubmitContactForm>({
        resolver: zodResolver(submitContactSchema),
        defaultValues: { phone: '' }
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const onSubmit = (): Promise<boolean> => {
        setSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(null);
        clearErrors();

        // TODO: Handle the form submission here when the backend is ready.

        return new Promise((resolve) => {
            setTimeout(() => {
                setSubmitError('Não foi possível enviar seu formulário de contato no momento. Tente novamente mais tarde.');
                setSubmitSuccess(false);
                setSubmitting(false);
                resolve(false);
            }, 1000);
        });
    };
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
                    setSubmitting(false);
                    setSubmitError(null);
                    clearErrors();
                    setModalIsOpen(false);
                }}
                submitButtonText='Entrar em contato'
                submitButtonDisabled={submitting}
                handleSubmit={!submitSuccess ? handleSubmit : undefined}
                onSubmit={!submitSuccess ? onSubmit : undefined}
                closeAfterSubmit
            >
                <motion.div layout>
                    {submitSuccess ? (
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ContactSubmitedIcon}
                                alt="Contact form submited icon"
                                width={200}
                                height={250}
                                quality={100}
                                className="w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/3"
                            />

                            <div className='flex flex-col items-center gap-10'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-xl md:text-2xl font-semibold text-center'>Formulário enviado!</h1>
                                    <p className='text-center text-sm'>Agradecemos o seu contato e interesse nos seviços da <span className='font-semibold'>Maxyni</span>.</p>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <p className='text-center'>Em breve um de nossos especialistas entrará em contato através do e-mail e telefone corporativo que você informou no formulário.</p>
                                    <p className='text-center text-xs'>O prazo para resposta é de normalmente até <span className='font-semibold'>48 horas</span>.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            <motion.div
                                layout
                                className='relative flex flex-col'
                            >
                                <label htmlFor="fullName">Nome completo {errors.fullName && <span className='text-red-500'>*</span>}</label>
                                <input
                                    disabled={submitting}
                                    type="text"
                                    placeholder='John Doe'
                                    className={`${errors.fullName ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                    {...register('fullName', {
                                        onChange: () => { clearErrors('fullName') },
                                        onBlur: () => { trigger('fullName') }
                                    })}
                                />
                                {errors.fullName &&
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className='text-red-500 text-xs ml-1'
                                    >
                                        {errors.fullName.message}
                                    </motion.p>
                                }
                            </motion.div>

                            <motion.div
                                layout
                                className='relative flex flex-col'
                            >
                                <label htmlFor="email">E-mail corporativo {errors.email && <span className='text-red-500'>*</span>}</label>
                                <input
                                    disabled={submitting}
                                    type="email"
                                    placeholder='john.doe@exemplo.com'
                                    className={`${errors.email ? "border border-red-400" : "border"} px-3 py-2 rounded-md outline-none transition duration-300 ease-out focus:border-[#9800b6]`}
                                    {...register('email', {
                                        onChange: () => { clearErrors('email') },
                                        onBlur: () => { trigger('email') }
                                    })}
                                />
                                {errors.email &&
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className='text-red-500 text-xs ml-1'
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                }
                            </motion.div>

                            <PhoneInput
                                control={control}
                                onChange={() => { clearErrors('phone') }}
                                onBlur={() => { trigger('phone') }}
                                errorMessage={errors.phone?.message}
                                disabled={submitting}
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
                        </div>
                    )}
                </motion.div>
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