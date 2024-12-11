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
                        Algumas empresas oferecem softwares-- nós oferecemos soluções. E com isso, nós temos uma longa lista de diferenciais. Mas para simplificar, aqui estão alguns dos principais motivos pelos quais a Maxyni é a escolha certa para o seu negócio:
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/nHHdLZu.png"} quality={100} width={150} height={150} alt='Support icon'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Suporte</h1>
                            <span className='text-center'>Nosso atendimento é humanizado, e gostamos disso. Nosso suporte está sempre disponível para te ajudar e resolver problemas que possam surgir no seu dia-a-dia!</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/OTZZFra.png"} quality={100} width={150} height={150} alt='Customization icon'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Customização</h1>
                            <span className='text-center'>Sabemos que cada pessoa é única e tem preferências. Por isso, nossos sistemas são altamente customizáveis, oferecendo um melhor conforto para o usuário.</span>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center'>
                        <Image className='z-10' src={"https://i.imgur.com/qIArruO.png"} quality={100} width={150} height={150} alt='Magic icon'/>
                        <div className='flex flex-col bg-white shadow-2xl rounded-md w-64 h-52 p-2 -mt-16 py-12'>
                            <h1 className='text-center text-lg font-bold mb-1'>Mágica! <span className='text-sm font-medium'>Como assim?</span></h1>
                            <span className='text-center'>Temos uma rapidez absurda para lançar atualizações. Ou seja, a cada dia que se passa, estamos decolando uma nova solução ou função para você!</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
