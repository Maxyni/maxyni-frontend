import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/footer/footer";
import useTranslation from 'next-translate/useTranslation';

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { t } = useTranslation("common");

  return (
    <html lang="pt-br">
      <head>
        <title>{t('metadata_title')}</title>
        <meta name="description" content={t('metadata_description')} />
        <meta name="keywords" content={t('metadata_keywords')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Maxyni" />
      </head>
      
      <body className={`bg-[#F1F7FD] ${jost.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}