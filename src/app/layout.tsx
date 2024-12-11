import { Jost } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/footer/footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxyni | Soluções profissionais corporativas de desenvolvimento",
  description: "Precisa de soluções únicas desenvolvidas com foco em qualidade e escalabilidade? Com as soluções da Maxyni, você atinge o máximo de potencial e rendimento. Descubra como podemos transformar o seu negócio hoje mesmo!",
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
