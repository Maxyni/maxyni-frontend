import { Jost } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/footer/footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxyni | Soluções profissionais para todos os tipos de negócio!",
  description: "Precisa de um impulso para o seu negócio? Com as soluções da Maxyni, você atinge o máximo potencial e rendimento. Descubra como podemos transformar o seu negócio!",
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
