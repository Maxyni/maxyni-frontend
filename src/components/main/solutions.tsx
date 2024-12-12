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
                        Desbloqueie todo o potencial do seu negócio com as <strong>soluções da Maxyni</strong>!
                        <br />
                        <br />
                        Cada produto é desenvolvido com foco nas <strong>necessidades reais</strong> do dia-a-dia, considerando as dores e desafios de cada área de atuação. Nossos produtos são projetados para serem <strong>intuitivos, eficientes e robustos</strong>, garantindo facilidade de uso sem abrir mão da performance.
                        <br />
                        <br />
                        <span className="font-bold">Conheça nossos produtos:</span>
                        <br />
                        <span className="font-bold">•</span> Atualmente, desenvolvemos <strong>Web Apps Fullstack</strong> sob medida para empresas de pequeno e médio porte. Nosso foco é <strong>automatizar processos</strong> e economizar tempo, permitindo que sua equipe se concentre no que realmente importa.
                        <br />
                        <span className="font-bold">•</span> Para o futuro, estamos trabalhando em soluções <strong>SaaS multi-tenant</strong>, projetadas para empresas de todos os tamanhos. Com ênfase em <strong>escalabilidade</strong> e <strong>segurança</strong>, essas ferramentas prometem transformar a forma como você gerencia seu negócio. Fique ligado!
                    </p>
                </div>
            </div>
        </Container>

    );
}
