type PropsInputType = {
    idInput: string,
    placeholder: string
}
export function Input ({idInput, placeholder}:PropsInputType) {
    return(
        <>
            <input 
                type="text" 
                id={idInput}
                placeholder={placeholder}
                className={`
                    bg-slate-200 text-black px-4 py-2 rounded-xl text-lg
                `}
            />
        </>
    )
}