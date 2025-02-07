import { getCookie } from "@/lib/cookies"
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async (req) => {
    const locale = await getCookie("i18n@locale") ||
        (await req.requestLocale) ||
        (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string)

    return {
        locale,
        messages: (await import(`../../public/translations/${locale}.json`)).default
    }
})