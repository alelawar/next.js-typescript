import { auth, currentUser } from "@clerk/nextjs/server"
import { log } from "console"
export default async function Dashboard() {
    const authObj = await auth()
    const userObj = await currentUser()
    

    log(authObj, userObj)
    return <h1>Dashboard Page</h1>
}