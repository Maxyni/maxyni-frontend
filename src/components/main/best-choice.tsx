'use client'

import React from 'react'
import { Container } from '@/components/global/container';
import Image from 'next/image';

export default function BestChoice() {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20'>
                <div className="w-[90%] lg:w-[420px] mt-2 text-center lg:text-left">
                    <h1 className='w-full lg:w-[420px] text-4xl lg:text-5xl font-bold leading-snug'>
                        Por que somos sua <span className='bg-gradient-to-r from-[#4682B4] to-[#4B0082] bg-clip-text text-transparent'>melhor</span> escolha?
                    </h1>
                    <p className='text-base font-light'>
                        Todos os nossos sistemas são projetados e desenvolvidos com foco nas necessidades específicas de cada tipo de negócio, garantindo soluções adequadas e eficientes para cada cliente.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/nHHdLZu.png"} quality={100} width={150} height={168} alt='Image Error'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold'>Suporte</h1>
                            Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana, para garantir que você nunca fique sem assistência.
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/OTZZFra.png"} quality={100} width={150} height={168} alt='Image Error'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold'>Customização</h1>
                            Oferecemos sistemas totalmente customizáveis, adaptados às necessidades específicas do seu negócio.
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/qIArruO.png"} quality={100} width={150} height={168} alt='Image Error'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold'>Mágica</h1>
                            Desenvolvemos interfaces intuitivas, que facilitam o uso dos nossos sistemas, mesmo sem conhecimentos técnicos avançados. Parece até mágica!
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
