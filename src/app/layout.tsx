import { Jost } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/footer/footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxyni | Soluções digitais sob medida para o seu negócio",
  description: "Maximize o potencial da sua empresa com soluções digitais personalizadas, desenvolvidas com excelência, escalabilidade e segurança. Descubra como a Maxyni pode transformar desafios em oportunidades e levar seu negócio ao próximo nível!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-[#F1F7FD] ${jost.className}`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
