type StateMenuType = {
    stateMenu: string,
}

export function MenuBar ({stateMenu}:StateMenuType) {
    return(
        <>
            <div className={`
                ${stateMenu} transform transition-opacity duration-1000 ease-in-out bg-zinc-900 w-72 h-auto py-4 px-4 text-sm font-light top-[4.4rem]
                z-50
            `}>
                <ul>
                    <div className="flex flex-col gap-2">
                        <strong>GESTÃO</strong>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão de Projetos e Metodologias Ágeis</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão Estratégica de Negócios</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão Comercial e Vendas</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão de Pessoas e Negócios</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão Estratégica de Recursos Humanos</a></li>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-2">
                        <strong>LIDERANÇA</strong>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Liderança e Gestão em Tecnologia</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Liderança e Gestão de Pessoas</a></li>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-2">
                        <strong>INOVAÇÃO</strong>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Business Intelligence e Analytics</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Gestão Ágil, Projetos e Inovação</a></li>
                        <li className="hover:hover:text-yellow-500"><a href="">Pós em Marketing e Estratégias Digitais</a></li>
                    </div>
                </ul>
            </div>
        </>
    )
}