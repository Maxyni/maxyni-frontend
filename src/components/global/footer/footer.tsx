'use client';

import Link from "next/link";
import { LogoIcon } from "../svgs/logo-icon";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Modal from "../modal";
import { useEffect, useState } from "react";

export default function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#compliance') {
            document.getElementById('footer')?.scrollIntoView();
            setModalIsOpen(true);
        }
    }, []);

    return (
        <footer id="footer" className="mt-28 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <LogoIcon width={50} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Maxyni</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">Institucional</a>
                        </li>
                        <li>
                            <Modal
                                title="Política de Privacidade e Cookies"
                                externalOpenState={modalIsOpen}
                                buttonToOpen={
                                    <a href="#compliance" className="hover:underline me-4 md:me-6">
                                        Política de privacidade
                                    </a>
                                }
                                onClose={() => {
                                    window.location.hash = '';
                                    setModalIsOpen(false);
                                }}
                                className="w-screen h-screen sm:h-[80vh] sm:w-[60%]"
                            >
                                <p className='text-black font-normal'><strong>1. Sobre o site:</strong> O site da Maxyni é uma landing page informativa, destinada a apresentar nossos produtos e serviços. Nenhum dado pessoal é coletado diretamente por meio do site, salvo em caso de interações futuras especificadas.</p>
                                <p className='text-black font-normal'><strong>2. Uso de Cookies e Tecnologias Similares:</strong> Podemos utilizar cookies e tecnologias similares para melhorar a experiência do usuário e analisar a utilização do site. Ao continuar utilizando o site, você consente com o uso dessas tecnologias. Você pode configurar seu navegador para bloquear cookies, mas isso pode impactar a experiência de navegação.</p>
                                <p className='text-black font-normal'><strong>3. Propriedade Intelectual:</strong> Todo o conteúdo do site, incluindo textos, imagens, logotipos e outros materiais, é protegido por direitos autorais e outras leis de propriedade intelectual. Você não está autorizado a reproduzir, distribuir, modificar ou utilizar qualquer parte do conteúdo sem prévia autorização por escrito da Maxyni.</p>
                                <p className='text-black font-normal'><strong>4. Limitação de Responsabilidade:</strong> A Maxyni se esforça para garantir que as informações apresentadas no site sejam precisas e atualizadas. No entanto, não nos responsabilizamos por erros, omissões ou pela interpretação incorreta das informações contidas no site. O uso do site é de sua própria responsabilidade.</p>
                                <p className='text-black font-normal'><strong>5. Links para Sites de Terceiros:</strong> O site pode conter links para outros sites. A Maxyni não se responsabiliza pelo conteúdo, políticas ou práticas de privacidade de sites de terceiros.</p>
                                <p className='text-black font-normal'><strong>6. Modificações na Política e no Site:</strong> Reservamo-nos o direito de alterar nossa Política de Privacidade e Cookies a qualquer momento, sem aviso prévio. Recomendamos que você revise esta página periodicamente para estar ciente de eventuais mudanças. Também poderemos modificar ou descontinuar qualquer parte do site sem aviso prévio.</p>
                                <p className='text-black font-normal'><strong>7. Legislação Aplicável:</strong> Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente do uso do site deverá ser resolvida no foro da Comarca de Blumenau.</p>
                                <p className="text-black font-normal"><strong>8. Contato:</strong> Caso tenha alguma dúvida sobre nossa Política de Privacidade e Cookies, ou qualquer outra questão, entre em contato conosco pelo e-mail: <Link href="mailto:suporte@maxyni.com.br" className="hover:underline font-semibold">suporte@maxyni.com.br</Link>.</p>
                            </Modal>
                        </li>

                        <li className="flex">
                            <a href="https://github.com/Maxyni" target="_blank" className="me-4 md:me-6"><BsGithub /></a>
                        </li>
                        <li className="flex">
                            <a href="https://instagram.com/MaxyniSistemas" target="_blank" className="me-4 md:me-6"><BsInstagram /></a>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© {(new Date).getFullYear()} <Link href="/" className="hover:underline">Maxyni</Link>. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}