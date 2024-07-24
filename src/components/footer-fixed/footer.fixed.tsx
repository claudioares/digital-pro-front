export function FooterFixed () {
    return(
        <>
            <footer className={`
                w-full h-24 z-50 bg-zinc-900 fixed left-0 bottom-0 
            `}>
                <div className=" flex items-center justify-center w-full h-full mt-1 border-t-[0.1rem] border-teal-800">
                    <button className={`
                        w-auto h-auto px-8 py-2 text-teal-800 
                        border border-teal-800
                        hover:text-white  hover:bg-green-400 
                        rounded-xl
                        transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-nonetransition ease-in delay-100
                    `}>FALE COM NOSSA EQUIPE</button>
                </div>
            </footer>
        </>
    )
}