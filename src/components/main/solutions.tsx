'use client';

import React from 'react';
import { Container } from '@/components/global/container';
import Image from 'next/image';
import MaxyniSolutionsImage from '../../../public/maxyni-solutions.png';

export default function Solutions() {
    return (
        <Container>
            <div id="solutions" className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <Image
                    src={MaxyniSolutionsImage}
                    alt="Solutions image"
                    quality={100}
                    className="w-full md:w-3/5 lg:w-full xl:w-[80%] 2xl:w-[60%]"
                />

                <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h1 className="text-center lg:text-left text-5xl font-bold leading-tight">
                        Soluções para atingir o <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">MÁXIMO</span>.
                    </h1>

                    <div className="flex flex-col gap-6 m-4">
                        <p className="text-base font-light">Desbloqueie todo o potencial do seu negócio com as <strong>soluções da Maxyni</strong>!</p>

                        <p className="text-base font-light">Cada produto é desenvolvido com foco nas <strong>necessidades reais</strong> do dia-a-dia, considerando as dores e desafios de cada área de atuação. Nossos produtos são projetados para serem <strong>intuitivos, eficientes e robustos</strong>, garantindo facilidade de uso sem abrir mão da performance.</p>

                        <div className='flex flex-col gap-1'>
                            <h2 className="font-bold">Conheça nossos produtos:</h2>

                            <ul className="list-disc list-inside">
                                <li className="font-light">Atualmente, desenvolvemos <strong>Web Apps Fullstack</strong> sob medida para empresas de pequeno e médio porte. Nosso foco é <strong>automatizar processos</strong> e economizar tempo, permitindo que sua equipe se concentre no que realmente importa.</li>
                                <li className="font-light">Para o futuro, estamos trabalhando em soluções <strong>SaaS multi-tenant</strong>, projetadas para empresas de todos os tamanhos. Com ênfase em <strong>escalabilidade</strong> e <strong>segurança</strong>, essas ferramentas prometem transformar a forma como você gerencia seu negócio. Fique ligado!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}