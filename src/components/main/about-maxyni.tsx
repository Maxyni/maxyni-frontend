'use client';

import React from 'react';
import { Container } from '@/components/global/container';
import Image from 'next/image';
import AboutMaxyniImage from '../../../public/about-maxyni.png';

export default function AboutMaxyni() {
    return (
        <Container>
            <div
                id="about"
                className="flex lg:flex-row flex-col items-center justify-center gap-5"
            >
                <Image
                    src={AboutMaxyniImage}
                    alt="About Maxyni image"
                    quality={100}
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
                />

                <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h1 className="text-center lg:text-left text-5xl font-bold leading-tight">
                        Quem é a
                        <span className="bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent">
                            {' Maxyni'}
                        </span>?
                    </h1>

                    <p className="mt-5 text-base font-light">
                        A Maxyni nasceu para <strong>simplificar</strong> como empresas gerenciam seus processos e tomam decisões.
                        <br />
                        <br />
                        Mais do que criar produtos digitais, queremos ser <strong>referência</strong>. Acreditamos que a tecnologia deve ser <strong>acessível</strong> e <strong>intuitiva</strong>. Por isso, desenvolvemos soluções pensadas para empresas de todos os tamanhos e setores.
                        <br />
                        <br />
                        O que nos diferencia? <strong>Pessoas, qualidade e cuidado.</strong> Tudo o que fazemos tem como objetivo <strong>facilitar</strong> o dia a dia das empresas e <strong>impactar positivamente</strong> as pessoas. Nossa essência é entregar <strong>qualidade</strong> em cada detalhe.
                    </p>
                </div>
            </div>
        </Container>
    );
}
