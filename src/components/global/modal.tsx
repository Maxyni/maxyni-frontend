'use client';

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiLoader5Fill } from "react-icons/ri";

/**
 * The data type for the form data. 
 */
export type DataType = {
    [key: string]: unknown;
}

/**
 * The props for the modal component.
 */
type ModalProps = {
    /**
     * The title of the modal.
     */
    title: ReactNode;

    /**
     * The class name to apply to the modal. Optional.
     */
    className?: string;

    /**
     * With this you can open and close the modal from outside the component and have a reference to the modal. Optional.
     */
    externalOpenState?: boolean;

    /**
     * The button that opens the modal.
     */
    buttonToOpen?: ReactNode;

    /**
     * The text to display on the close button. Optional.
     * 
     * @default 'Fechar'
     */
    closeButtonText?: string;

    /**
     * The text to display on the submit button. Optional.
     * 
     * @default 'Confirmar'
     */
    submitButtonText?: string;

    /**
     * The function to call when the form is submitted. Optional.
     * 
     * If this prop is not provided, the modal will not have a form and will not be able to submit data.
     * This is useful for modals that only display information and do not require user input or submission.
     * 
     * The function should return a promise that resolves to a boolean indicating whether the submission was successful.
     * 
     * @param data The form data submitted by the user.
     * @returns A promise that resolves to a boolean indicating whether the submission was successful.
     */
    onSubmit?: (data: DataType) => Promise<boolean>;

    /**
     * Whether to close the modal after the form is submitted. Optional.
     * 
     * If this prop is set to `true`, the modal will close after the form is submitted successfully.
     * 
     * This prop is only used if the `onSubmit` prop is provided.
     * 
     * @default false
     */
    closeAfterSubmit?: boolean;

    /**
     * The function to call when the modal is closed. Optional.
     */
    onClose?: () => void;

    /**
     * The children of the modal. This is the content of the modal.
     */
    children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, className, externalOpenState, buttonToOpen, closeButtonText, submitButtonText, onSubmit, closeAfterSubmit, onClose, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // This state is used to show a loading spinner if the modal supports and is submitting data.

    /**
     * Updates the modal open state when the external open state changes.
     */
    useEffect(() => {
        if (externalOpenState !== undefined) {
            setIsOpen(externalOpenState);
        }
    }, [externalOpenState]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    /**
     * Toggles the modal open and closed.
     */
    const toggleModal = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    /**
     * Handles the form submission.
     * 
     * Should not be used if the `onSubmit` prop is not provided.
     * 
     * @param e The form submission event.
     * @returns A promise that resolves to a boolean indicating whether the submission was successful.
     */
    const handleFormSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data: DataType = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        const success = await onSubmit?.(data).catch(() => false);
        if (success && closeAfterSubmit) {
            setIsOpen(false);
        }

        setIsLoading(false);
    }, []);

    /**
     * Closes the modal and calls the `onClose` function if provided.
     */
    const handleModalClose = useCallback(() => {
        setIsOpen(false);
        onClose?.();
    }, []);

    return (
        <>
            {buttonToOpen && (
                <div onClick={toggleModal}>
                    {buttonToOpen}
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleModal}
                        />

                        {/* Modal */}
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-40"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <motion.div
                                layout
                                className={`${className} bg-[#F1F7FD] relative w-full h-full sm:w-[70%] sm:max-w-[40rem] sm:h-auto sm:max-h-[80%] sm:h-de mx-auto py-3 px-6 rounded-3xl shadow-lg flex flex-col`}
                            >
                                <div className="w-full flex items-center justify-between h-[72px]">
                                    <h1 className="font-bold text-2xl leading-7 text-black truncate line-clamp-1">{title}</h1>
                                    <button
                                        type="button"
                                        className="p-2 text-black/70 text-[16px] leading-6 transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={handleModalClose}
                                    >
                                        <p>
                                            {closeButtonText ?? <IoIosClose className="text-3xl" />}
                                        </p>
                                    </button>
                                </div>

                                {/* Scrollable contect */}
                                <motion.div
                                    layout
                                    className="flex-grow overflow-y-auto pb-1"
                                >
                                    <form
                                        className="flex flex-col"
                                        onSubmit={handleFormSubmit}
                                    >
                                        <div className="flex flex-col gap-3 mb-5">
                                            {children}
                                        </div>

                                        <motion.div
                                            layout
                                            className="w-full flex justify-center gap-4"
                                        >
                                            {onSubmit && (
                                                <button
                                                    type="submit"
                                                    className={`${isLoading ? 'bg-[#4864e156] bg-opacity-70' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105'} w-44 py-3 text-white font-medium rounded-md text-[16px] leading-6 transition-all duration-300 ease-in-out`}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        <span className="w-full flex items-center justify-center">
                                                            <RiLoader5Fill className="animate-spin" size={24} />
                                                        </span>
                                                    ) : (
                                                        <p>{submitButtonText ?? 'Confirmar'}</p>
                                                    )}
                                                </button>
                                            )}
                                        </motion.div>
                                    </form>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Modal;