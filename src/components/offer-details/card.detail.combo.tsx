import { handleNavigation } from "../../utils/useNavigate"

type PropsCardComboDatails = {
    qnt: number,
    valueParce: string
    valueFull: string
}
export function CardComboDatail ({qnt, valueParce, valueFull}:PropsCardComboDatails) {
    return(
        <>
            <section className="w-[31rem] h-auto bg-slate-100 rounded-2xl p-8">
                <div className="flex items-center justify-between gap-2 w-full">
                    <h1 className="text-center text-xl font-semibold">Voce + {qnt} {qnt > 1 ? 'perfis' : 'perfil'}</h1>
                    <button className={`
                            bg-green-700 text-white text-center w-auto h-auto px-12 py-2 rounded-2xl
                            hover:bg-slate-800    
                    `}
                    onClick={()=>handleNavigation("/subscribe")}
                    >QUERO ASSINAR</button>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-end border-b border-b-green-800 h-auto py-4 font-semibold">
                        <span className="mr-1">12x de:</span>
                        <p className="text-1xl">R$</p>
                        <h1 className="text-6xl">{valueParce}</h1>
                        <span className="text-1xl">/</span>
                        <p className="text-1xl">mês</p>
                    </div>
                    <span>á vista de R$ {valueFull}</span>
                </div>
            </section>
        </>
    )
}