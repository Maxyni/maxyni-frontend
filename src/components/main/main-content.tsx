import Image from "next/image";
import { NavBar } from "../global/navbar/nav-bar";
import { Container } from "../global/container";
import { FaRegCompass } from "react-icons/fa";
import Solutions from "./solutions";
import BestChoice from "./best-choice";
import WhoIsMaxyni from "./who-is-maxyni";
import Link from "next/link";

export default function MainContent() {
    return (
        <>
            <NavBar />
            <Container className="flex flex-col gap-12">
                <div className='flex flex-col lg:flex-row items-center justify-center w-full h-auto lg:h-[400px] px-10 py-10 bg-gradient-to-r from-[#9A35E4] to-[#4682B4] rounded-t-[48px] rounded-bl-[48px] rounded-br-[250px]'>
                    <div className='max-w-xl w-full lg:w-[36rem] text-left'>
                        <h1 className='text-white font-extrabold text-4xl lg:text-5xl'>
                            TENHA O MÁXIMO <br />DE POTENCIAL <br />COM MAXYNI
                        </h1>
                        <p className='text-white text-sm mt-2'>
                            Somos uma empresa de tecnologia com foco em desenvolvimento de soluções digitais para empresas e pessoas. Sendo assim, ajudamos a transformar ideias em realidade, com qualidade, segurança e agilidade. <br />
                            Mas acho que você já ouviu isso antes, né? Só que nós temos alguns diferenciais que nos tornam únicos-- de verdade. Clique em <strong>Explorar</strong> e descubra a Maxyni!
                        </p>
                        
                        <div className="relative h-12 w-40 rounded-xl group mt-5">
                            <div className="absolute inset-0 shadow-white shadow-md bg-sky-500 transition-transform duration-300 ease-in-out transform scale-90 group-hover:scale-x-[1.03] group-hover:scale-y-[1.1] rounded-xl" />
                            <Link
                                href={"#solutions"}
                                className="relative flex items-center gap-1 shadow-2xl justify-center w-full h-full rounded-xl bg-white text-black z-10">
                                <FaRegCompass />
                                <p>Explorar</p>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <Image src={"https://i.imgur.com/jav4bLm.png"} alt='Rocket Image' width={600} height={750} quality={100} />
                    </div>
                </div>
                <div className="mt-12">
                    <WhoIsMaxyni />
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