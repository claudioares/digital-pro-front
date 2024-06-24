type PropsCardsStatusStack = {
    status: string;
    colorText:string
}
export function TagsStatusCard ({status, colorText}:PropsCardsStatusStack) {
    return (
        <>
            <div className={`
                bg-yellow-500
                w-32 px-2 py-1 text-sm font-semibold rounded-3xl
                flex justify-center items-cente shadow-slate-600 shadow-shadowPro
                ${colorText}
            `}>{status}</div>
        </>
    )
}