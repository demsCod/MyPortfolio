import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export const Section = ( props: PropsWithChildren<{className?: string , id?:string}>) => {
    return (
            <section id={props.id} className={ cn(props.className)}>
                {props.children}
            </section>
    )
}