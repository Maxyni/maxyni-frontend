'use client'

import React from 'react'
import { Container } from '@/components/global/container';
import Image from 'next/image';

export default function WhoIsMaxyni() {

    return (
        <Container>
            <div className='flex items-center justify-center gap-5'id='who'>
                <Image src={"https://i.imgur.com/QUA7c0c.png"} alt='Who Image' width={574} height={700} quality={100} />
                <div>
                    <h1 className='text-5xl font-bold'>Quem é a <span className='bg-gradient-to-r from-[#4B0082] to-[#4682B4] bg-clip-text text-transparent'>Maxyni</span>?</h1>
                    <p className='mt-5 text-base font-light'>
                        A Maxyni é uma empresa brasileira especializada no desenvolvimento de software para gestão empresarial. Nosso foco é oferecer soluções eficientes e práticas para diversas indústrias, com o objetivo de simplificar o dia a dia das empresas, independente do setor em que atuam.
                        <br /><br />
                        Nosso compromisso vai além de simplesmente fornecer produtos. Acreditamos que, para ser verdadeiramente relevante, é preciso ser referência. Por isso, cada um de nossos softwares é pensado para entregar o máximo de valor e performance, sempre com foco em atender as necessidades reais dos nossos clientes.
                        <br /><br />
                        Nosso diferencial? Criamos soluções que funcionam para pessoas reais, em cenários de negócios reais. Entendemos que, independentemente do nicho, o sucesso de uma empresa está nas pessoas que a compõem. Por isso, nossos produtos não são apenas ferramentas; são facilitadores de decisões e resultados que fazem a diferença.
                    </p>
                </div>
            </div>
        </Container>
    );
}
