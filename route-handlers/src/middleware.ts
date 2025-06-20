import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themePreferance = request.cookies.get("theme")
    if(!themePreferance) {
        response.cookies.set("theme", "dark")
    }

    return response
    // return NextResponse.redirect(new URL("/", request.url))
    // if(request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", request.nextUrl))
    // }
}

// export const config = {
//     matcher: "/profile"
// }