import type { Metadata } from "next"
import { Jost } from "next/font/google"
import Footer from "@/components/footer/footer"
import { NextIntlClientProvider } from "next-intl"
import { Navbar } from "@/components/navbar/navbar"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import "./globals.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SpeedInsights } from "@vercel/speed-insights/next" // For Vercel Speed Insights - do not remove!

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata")

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: "index, follow",
    authors: [
      {
        name: "Mikael",
        url: "https://github.com/MikaelMaster"
      },
      {
        name: "Guilherme",
        url: "https://github.com/guilhermehnf"
      }
    ],
    metadataBase: new URL("https://maxyni.com.br")
  }
}

const jost = Jost({ subsets: ["latin"] })

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body className={`bg-[#F1F7FD] ${jost.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}