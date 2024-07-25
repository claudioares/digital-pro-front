import Link from "next/link"

type PropsButtonType = {
    nameButton: string,
    bg: string,
    color: string,
    link?: string
}

export function Button ({nameButton, bg, color, link}:PropsButtonType) {
    return (
        <>
            {!link ? <button className={`
                ${bg} ${color} font-semibold text-2xk py-2 px-4 rounded-lg hover:opacity-90
            `}
            >{nameButton}</button>
                :
            <Link href={link}>
                <button className={`
                    ${bg} ${color} font-semibold text-2xk py-2 px-4 rounded-lg hover:opacity-90
                `}
                >{nameButton}</button>
            </Link>}
        </>
    )
}