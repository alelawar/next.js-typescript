import { log } from "console"
import { cookies } from "next/headers"

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    log(theme)
    log("About server component")
    return <h1>About Page</h1>
}