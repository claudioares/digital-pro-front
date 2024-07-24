import { ReactNode } from "react"

type PropsType = {
    children: ReactNode
}

export function Container ({children}:PropsType) {
    return(
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            {children}
        </div>
    )
}