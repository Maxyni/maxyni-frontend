'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);

    const drawerVariants = {
        open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
        closed: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="flex items-center relative">
            <button
                onClick={() => setIsOpen(true)}
                className="text-stone-900 text-3xl md:hidden focus:outline-none"
            >
                <HiMiniBars3BottomRight />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                        />

                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={drawerVariants}
                            className="fixed top-0 right-0 w-3/4 md:w-1/3 h-full bg-white z-50 p-5 shadow-lg"
                        >
                            <div className='flex items-center justify-end'>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-black text-3xl focus:outline-none"
                                >
                                    <LiaTimesSolid />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-5 mt-14">
                                <Link
                                    href={"#start"}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl px-4 py-2 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                >
                                    Início
                                </Link>
                                <Link
                                    href={"#about"}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl px-4 py-2 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                >
                                    Sobre nós
                                </Link>
                                <Link
                                    href={"#solutions"}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl px-4 py-2 rounded-md text-black font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-400/10"
                                >
                                    Soluções
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}