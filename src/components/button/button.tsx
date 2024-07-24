type PropsButtonType = {
    nameButton: string,
    bg: string,
    color: string,
    onClick?: any
}

export function Button ({nameButton, bg, color, onClick}:PropsButtonType) {
    return <button className={`
        ${bg} ${color} font-semibold text-2xk py-2 px-4 rounded-lg hover:opacity-90
    `}
    onClick={onClick}
    >{nameButton}</button>
}