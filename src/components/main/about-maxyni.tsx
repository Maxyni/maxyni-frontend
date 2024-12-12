'use client';

import React from 'react';
import { Container } from '@/components/global/container';
import Image from 'next/image';

export default function AboutMaxyni() {
    return (
        <Container>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-5" id="about">
                <Image
                    src="https://i.imgur.com/QUA7c0c.png"
                    alt="About Maxyni image"
                    width={400}
                    height={400}
                    quality={100}
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
                />

                <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h1 className="text-5xl font-bold leading-tight">
                        Quem é a
                        <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">
                            {' Maxyni'}
                        </span>?
                    </h1>

                    <p className="mt-5 text-base font-light">
                        A Maxyni nasceu com o objetivo de simplificar a forma como empresas gerenciam seus processos e tomam decisões.
                        <br />
                        <br />
                        Nosso objetivo vai muito além de simplesmente oferecer software-produtos; queremos ser a referência. Acreditamos que a tecnologia deve ser acessível e descomplicada, e é por isso que desenvolvemos soluções que atendem às necessidades de empresas de todos os tamanhos e segmentos.
                        <br />
                        <br />
                        Nosso diferencial? Pessoas, qualidade e cuidado. Tudo que fazemos têm o objetivo de facilitar e melhorar a vida de pessoas. Nossa cultura é sempre oferecer qualidade e cuidado em tudo que fazemos.
                    </p>
                </div>
            </div>
        </Container>
    );
}
