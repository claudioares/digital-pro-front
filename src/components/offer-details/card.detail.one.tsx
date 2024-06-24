import { handleNavigation } from "../../utils/useNavigate";

export function CardDatailOne () {
    return (
        <>
            <section className="w-[31rem] h-auto bg-slate-100 rounded-2xl">
                <div className="flex items-center justify-center w-full h-20 bg-slate-800 rounded-t-2xl">
                    <h1 className="text-slate-100 text-xl">PLANO ANUAL</h1>
                </div>

                <div className="px-8 py-12">
                    <div className="w-full h-ful">
                        <span className="bg-green-700 text-black">Por apenas 12x</span>
                        <div className="flex items-end border-b border-b-green-800 h-auto py-4 font-semibold">
                            <p className="text-4xl">R$</p>
                            <h1 className="text-9xl">159</h1>
                            <span className="text-4xl">/</span>
                            <p className="text-4xl">mês</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 justify-center items-center py-6">
                        <button className={`
                            bg-green-700 text-white text-center w-auto h-auto px-28 py-2 rounded-2xl
                            hover:bg-slate-800
                        `}
                        onClick={()=>handleNavigation("/subscribe")}
                        >ASSINE AGORA</button>
                        <span>7 Dias de garantia total</span>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-6">
                            <li>&#10004; Acesso imediato e ilimitado a todos os cursos</li>
                            <li>&#10004; Aulas com profissionais referências no mercado</li>
                            <li>&#10004; Certificado de conclusão em todos os cursos</li>
                            <li>&#10004; Masterclasses e materiais de apoio com exercícios práticos das aulas.</li>
                            <li>&#10004; Acesso ao App via iOS, Android ou web em qualquer dispositivo.</li>
                        </ul>
                    </div>
                </div>
                
            </section>
        </>
    )
}