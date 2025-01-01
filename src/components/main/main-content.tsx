'use client';

import Image from "next/image";
import { Container } from "../global/container";
import Solutions from "./solutions";
import BestChoice from "./best-choice";
import AboutMaxyni from "./about-maxyni";
import Link from "next/link";
import { BsRocketTakeoff } from "react-icons/bs";
import { useState } from "react";
import RocketImage from '../../../public/rocket.png';

export default function MainContent() {
    const [isRocketFloating, setIsRocketFloating] = useState(false); // State to control the rocket floating animation.
    
    return (
        <>
            <Container className="flex flex-col gap-12">
                <div className='flex flex-col lg:flex-row items-center justify-center w-full h-auto lg:h-[400px] px-10 py-10 bg-gradient-to-r from-[#9A35E4] to-[#4682B4] rounded-t-[48px] rounded-bl-[48px] rounded-br-[250px]'>
                    <div className='max-w-xl w-full lg:w-[36rem] text-left'>
                        <h1 className='text-white font-extrabold text-4xl lg:text-5xl'>
                            DECOLE O POTENCIAL <br />DA SUA EMPRESA <br />COM A MAXYNI
                        </h1>

                        <p className='text-white text-medium mt-2'>
                            Somos especialistas em criar soluções digitais para empresas e pessoas. Transformamos suas ideias em realidade com qualidade, segurança e agilidade. <br />
                            Nossos diferenciais nos destacam no mercado. Clique em <strong>Decolar</strong> e descubra como podemos impulsionar seus resultados!
                        </p>

                        <div className="relative h-12 w-40 rounded-xl group mt-5">
                            <div className="absolute inset-0 shadow-white shadow-md bg-sky-500 transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                            <Link
                                href={"#solutions"}
                                className="relative flex items-center gap-2 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10">
                                <BsRocketTakeoff />
                                <p><strong>Decolar</strong></p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`hidden lg:block animate-[rocketEntry_1.5s_ease-out_forwards] ${isRocketFloating && "animate-[rocketFloat_3s_ease-in-out_infinite]"}`}
                        onAnimationEnd={() => setIsRocketFloating(true)} // When the rocket entry animation ends, start the floating animation.
                    >
                        <Image
                            src={RocketImage}
                            alt='Rocket image'
                            quality={100}
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <AboutMaxyni />
                </div>

                <div className='mt-12'>
                    <BestChoice />
                </div>

                <div className='mt-12'>
                    <Solutions />
                </div>
            </Container>
        </>
    );
}