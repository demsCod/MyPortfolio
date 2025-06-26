import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export const Section = (props: PropsWithChildren<{className?: string}>) => {
    return (
            <section className={ cn(props.className)}>
                {props.children}
            </section>
    )
}