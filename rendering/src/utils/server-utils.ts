import { log } from "console"
import "server-only"

export const ServerSideFunction = () => {
    log(
        `use multiple liblary bla bla bla`
    )

    return "server result"
}