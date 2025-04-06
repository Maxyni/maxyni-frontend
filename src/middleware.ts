import { NextResponse, NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const locale = searchParams.get("loc")

    if (locale) {
        const response = NextResponse.next()
        // Set the cookie for the locale as requested
        response.cookies.set("i18n@locale", locale, {
            expires: Number.MAX_SAFE_INTEGER // Infinite
        })
        return response
    }

    // Continue with the normal flow if no "loc" parameter exists
    return NextResponse.next()
}

// Configure the middleware to run on all paths except certain ones
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
}