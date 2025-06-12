"use client"

import React, { ReactNode, useCallback, useEffect, useState } from "react"
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosClose } from "react-icons/io"
import { RiLoader5Fill } from "react-icons/ri"

/**
 * The props for the modal component.
 */
type ModalProps = {
    /**
     * The title of the modal.
     */
    title: ReactNode

    /**
     * The class name to apply to the modal. Optional.
     */
    className?: string

    /**
     * With this you can open and close the modal from outside the component and have a reference to the modal. Optional.
     */
    externalOpenState?: boolean

    /**
     * The button that opens the modal.
     */
    buttonToOpen?: ReactNode

    /**
     * The text to display on the submit button. Optional.
     * 
     * @default "Confirmar"
     */
    submitButtonText?: string

    /**
     * Whether the submit button should be disabled. Optional.
     * 
     * @default false
     */
    submitButtonDisabled?: boolean

    /**
     * The function to call when the form is submitted. Optional.
     */
    handleSubmit?: UseFormHandleSubmit<any>

    /**
     * This is called in handleSubmit and is used to submit the form data. Optional.
     */
    onSubmit?: SubmitHandler<any>

    /**
     * Whether to close the modal after the form is submitted. Optional.
     * 
     * If this prop is set to `true`, the modal will close after the form is submitted successfully.
     * 
     * This prop is only used if the `onSubmit` prop is provided.
     * 
     * @default false
     */
    closeAfterSubmit?: boolean

    /**
     * The function to call when the modal is open. Optional.
     */
    onOpen?: () => void

    /**
     * The function to call when the modal is closed. Optional.
     */
    onClose?: () => void

    /**
     * The children of the modal. This is the content of the modal.
     */
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, className, externalOpenState, buttonToOpen, submitButtonText, submitButtonDisabled, handleSubmit, onSubmit, closeAfterSubmit, onOpen, onClose, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false) // This state is used to show a loading spinner if the modal supports and is submitting data.

    /**
     * Updates the modal open state when the external open state changes.
     */
    useEffect(() => {
        if (externalOpenState !== undefined) {
            setIsOpen(externalOpenState)
            if (externalOpenState) {
                onOpen?.()
            }
        }
    }, [externalOpenState])

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isOpen])

    /**
     * Toggles the modal open and closed.
     */
    const toggleModal = useCallback(() => {
        const newState = !isOpen
        setIsOpen(newState)
        if (newState) {
            onOpen?.()
        }
    }, [isOpen])

    /**
     * Handles the form submission.
     * 
     * Should not be used if the `onSubmit` prop is not provided.
     * 
     * @param e The form submission event.
     * @returns A promise that resolves to a boolean indicating whether the submission was successful.
     */
    const handleFormSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if (onSubmit !== undefined) {
            const success = await handleSubmit?.(onSubmit)?.().catch(() => false)
            if (success && closeAfterSubmit) {
                setIsOpen(false)
            }
        }

        setIsLoading(false)
    }, [])

    /**
     * Closes the modal and calls the `onClose` function if provided.
     */
    const handleModalClose = useCallback(() => {
        setIsOpen(false)
        onClose?.()
    }, [])

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
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.div
                                layout
                                className={`${className} bg-[#F1F7FD] relative w-full h-full sm:w-[70%] sm:max-w-[40rem] sm:h-auto sm:max-h-[80%] sm:h-de mx-auto py-3 px-6 sm:rounded-3xl shadow-lg flex flex-col`}
                            >
                                <div className="w-full flex items-center justify-between h-[72px]">
                                    <h1 className="font-bold text-2xl leading-7 text-black truncate line-clamp-1">
                                        {title}
                                    </h1>
                                    <button
                                        className="p-2 text-black/70 leading-6 transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={handleModalClose}
                                    >
                                        <IoIosClose size={24} />
                                    </button>
                                </div>

                                {/* Scrollable content */}
                                <motion.div
                                    layout
                                    className="flex-grow overflow-y-auto overflow-x-hidden pb-1"
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
                                            {(handleSubmit && onSubmit) && (
                                                <button
                                                    type="submit"
                                                    className={`${(isLoading || submitButtonDisabled) ? "bg-[#4864e156] bg-opacity-70" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"} w-44 py-3 text-white font-medium rounded-md text-[16px] leading-6 transition-all duration-300 ease-in-out`}
                                                    disabled={isLoading || submitButtonDisabled}
                                                >
                                                    <span className="w-full flex items-center justify-center">
                                                        {isLoading ? (
                                                            <RiLoader5Fill size={24} className="animate-spin" />
                                                        ) : (
                                                            <>
                                                                {submitButtonText ?? "Confirmar"}
                                                            </>
                                                        )}
                                                    </span>
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
    )
}

export default Modal