'use client';

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
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
    buttonToOpen: ReactNode;

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
            <div onClick={toggleModal}>
                {buttonToOpen}
            </div>

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
                            className="fixed inset-0 flex items-center justify-center p-4 z-40"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div
                                className={`${className} bg-[#F1F7FD] w-full sm:w-[30rem] max-w-full mx-auto py-3 px-6 rounded-md shadow-lg flex flex-col max-h-[80vh]`}
                            >
                                <div className="w-full flex items-center justify-between h-[72px]">
                                    <h1 className="font-bold text-2xl leading-7 text-black">{title}</h1>
                                </div>

                                {/* Conteúdo Rolável */}
                                <div className="flex-grow overflow-y-auto">
                                    <form
                                        className="flex flex-col"
                                        onSubmit={handleFormSubmit}
                                    >
                                        <div className="flex flex-col gap-3 mb-5">
                                            {children}
                                        </div>
                                    </form>
                                </div>

                                {/* Footer */}
                                <div className="w-full flex justify-end gap-4 mt-4">
                                    <button
                                        type="button"
                                        className="p-2 text-black/70 text-[16px] leading-6 transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={handleModalClose}
                                    >
                                        <strong>
                                            {closeButtonText ?? 'Fechar'}
                                        </strong>
                                    </button>

                                    {onSubmit && (
                                        <button
                                            type="submit"
                                            className={`${isLoading ? 'bg-[#4864e156] bg-opacity-70' : 'bg-[#4864E1]'} w-32 p-3 text-white rounded-md font-semibold text-[16px] leading-6 transition duration-300 ease-in-out hover:scale-105`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="w-full flex items-center justify-center">
                                                    <RiLoader5Fill className="animate-spin" size={24} />
                                                </span>
                                            ) : (
                                                <strong>
                                                    {submitButtonText ?? 'Confirmar'}
                                                </strong>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Modal;