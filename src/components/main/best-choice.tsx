'use client'

import React from 'react'
import { Container } from '@/components/global/container';
import Image from 'next/image';

export default function BestChoice() {
    return (
        <Container>
            <div className='flex flex-col 2xl:flex-row items-center justify-center gap-10 2xl:gap-20'>

                <div className="w-[90%] lg:w-[420px] mt-2 text-center lg:text-left">
                    <h1 className='w-full lg:w-[420px] text-4xl lg:text-5xl font-bold leading-snug'>
                        Por que somos sua <span className='bg-gradient-to-r from-[#4682B4] to-[#4B0082] bg-clip-text text-transparent'>melhor</span> escolha?
                    </h1>

                    <p className='text-base font-light mt-4'>
                        Algumas empresas oferecem softwares — nós entregamos <strong>soluções completas</strong>. E o que nos torna únicos? Aqui estão alguns dos motivos pelos quais a Maxyni é a escolha certa para o seu negócio:
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/nHHdLZu.png"} quality={100} width={150} height={150} alt='Support icon' />

                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Suporte</h1>
                            <span className='text-center'>Nossoatendimento humanizado está sempre pronto para ajudar e resolver qualquer problema, garantindo que seu dia-a-dia flua sem complicações.</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/OTZZFra.png"} quality={100} width={150} height={150} alt='Customization icon' />

                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Customização</h1>
                            <span className='text-center text-medium'>Entendemos que cada negócio é único. Por isso, nossos sistemas são altamente customizáveis, proporcionando conforto e eficiência para você.</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/qIArruO.png"} quality={100} width={150} height={150} alt='Magic icon' />

                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-72 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Mágica! <span className='text-sm font-medium'>Como assim?</span></h1>
                            <span className='text-center text-medium'>Temos uma velocidade incrível para lançar atualizações. Estamos constantemente trazendo novas soluções e funções para você, porque inovação faz parte do nosso DNA.</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
