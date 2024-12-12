'use client';

import React from 'react';
import { Container } from '@/components/global/container';
import Image from 'next/image';

export default function Solutions() {
    return (
        <Container>
            <div className="flex sm:flex-row md:flex-row flex-col items-center justify-center gap-5" id="solutions">
                <Image
                    src="https://i.imgur.com/sXfjmCx.png"
                    alt="Solutions Image"
                    width={574}
                    height={700}
                    quality={100}
                    className="w-full sm:w-auto"
                />

                <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h1 className="text-5xl font-bold leading-tight">
                        Soluções para atingir o{" "}
                        <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">
                            MÁXIMO
                        </span>
                    </h1>

                    <p className="mt-5 text-base font-light">
                        Desbloqueie todo o potencial do seu negócio com as <span className='font-bold'>soluções da Maxyni</span>!
                        <br />
                        <br />
                        Cada produto é desenvolvido pensando nas dores e problemas do dia-a-dia da área em que aquele produto será utilizado. Nossos produtos são feitos para serem <span className='font-bold'>intuitivos e fáceis de usar</span>, sem perder a robustez e a eficiência necessárias para o seu negócio.
                        <br />
                        <br />
                        <span className='font-bold'>Conheça nossos produtos:</span><br />
                        <span className='font-bold'>•</span> Atualmente, desenvolvemos <span className='font-bold'>Web Apps Fullstack</span> sob encomenda para empresas de pequeno e médio porte, com foco em automação de processos e otimização de tempo. <br />
                        <span className='font-bold'>•</span> Para o futuro, estamos desenvolvendo soluções <span className='font-bold'>SaaS multi-tenant</span> para empresas de todos os tamanhos, com foco em escalabilidade e segurança. Fique ligado!
                    </p>
                </div>
            </div>
        </Container>

    );
}
