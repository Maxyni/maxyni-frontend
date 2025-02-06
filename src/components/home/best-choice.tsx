import { Section } from "@/components/section"
import SupportIcon from "../../../public/support-icon.png"
import CustomizationIcon from "../../../public/customization-icon.png"
import MagicIcon from "../../../public/magic-icon.png"
import Image from "next/image"
import React from "react"

export function BestChoice() {
    return (
        <Section id="best-choice">
            <div className="flex flex-col 2xl:flex-row items-center justify-center gap-10 2xl:gap-20">
                <div className="w-[90%] lg:w-[420px] mt-2 text-center lg:text-left">
                    <h1 className="w-full lg:w-[420px] text-4xl lg:text-5xl font-bold leading-snug">
                        Por que somos sua <span className="bg-gradient-to-r from-[#4682B4] to-[#4B0082] bg-clip-text text-transparent">melhor</span> escolha?
                    </h1>

                    <p className="text-base font-light mt-4">
                        Algumas empresas oferecem softwares — nós entregamos <strong>soluções completas</strong>. E o que nos torna únicos? Aqui estão alguns dos motivos pelos quais a Maxyni é a escolha certa para o seu negócio:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center">
                        <Image
                            src={SupportIcon}
                            alt="Balão de fala."
                            quality={100}
                            className="z-10 max-w-[150px]"
                        />

                        <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                            <h1 className="text-center text-lg font-bold mb-1">Suporte</h1>
                            <p className="text-center">Nosso atendimento humanizado está sempre pronto para ajudar e resolver qualquer problema, garantindo que seu dia-a-dia flua sem complicações.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={CustomizationIcon}
                            alt="Aquarela com pincel e paleta de cores."
                            quality={100}
                            className="z-10 max-w-[150px]"
                        />

                        <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                            <h1 className="text-center text-lg font-bold mb-1">Customização</h1>
                            <p className="text-center text-medium">Entendemos que cada negócio é único. Por isso, nossos sistemas são altamente customizáveis e adaptáveis, proporcionando conforto e eficiência para você.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={MagicIcon}
                            alt="Cartola com uma varinha mágica saindo dela."
                            quality={100}
                            className="z-10 max-w-[150px]"
                        />

                        <div className="flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12">
                            <h1 className="text-center text-lg font-bold mb-1">Mágica! <span className="text-sm font-medium">Como assim?</span></h1>
                            <p className="text-center text-medium">Temos uma velocidade incrível para lançar atualizações. Estamos constantemente trazendo novas soluções e funções para você, porque inovação faz parte do nosso DNA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}