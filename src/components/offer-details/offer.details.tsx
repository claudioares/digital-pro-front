import { Container } from "../container/container";
import { CardComboDatail } from "./card.detail.combo";
import { CardDatailOne } from "./card.detail.one";

export function OfferDetails () {
    return(
        <>
            <div className="flex flex-col gap-14">
                <Container>
                    <div className="h-full w-full flex flex-col gap-14">
                    <div className="w-full flex flex-col justify-center items-center">
                        <h1 className={`
                                text-slate-100 text-3xl  
                            `}>Pronto para dar vida às suas ideias?</h1>
                            <div className="flex gap-2">
                                <h1 className={`
                                text-slate-100 text-3xl  
                                `}>Descubra o poder da</h1>
                                <h1 className={`
                                text-yellow-500 text-3xl  
                                `}>tecnologia.</h1>
                            </div>
                    </div>  
                    </div>
                </Container>
                <div className="w-full">
                    <div className="min-w-full flex">
                        <section className="flex justify-center items-center w-[50%] h-full">
                            <CardDatailOne />
                        </section>
                        <section className="flex flex-col gap-6 justify-center items-center w-[50%] h-full">
                            <div className="flex gap-2">
                                <h1 className="text-2xl text-slate-100">Quero</h1> 
                                <h1 className="text-2xl text-yellow-500">dividir com alguém</h1> 
                                <h1 className="text-2xl text-slate-100">essa sua jornada?</h1>
                            </div>
                            <CardComboDatail qnt={1} valueParce="199" valueFull="2.388"/>
                            <CardComboDatail qnt={2} valueParce="219" valueFull="2.628"/>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}