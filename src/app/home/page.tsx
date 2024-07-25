import { CarouselCourses } from "@/components/carousel/carousel.courses";
import { Container } from "@/components/container/container";
import { Header } from "@/components/Header/header";
import { dataFormations } from "@/utils/data.formations";


export default function Home () {
    return(
        <>
            <Header />
            <div className="bg-zinc-900 w-full min-h-screen">
                <Container>
                    <div className="flex flex-col gap-24">
                        <div className="w-full h-auto flex flex-col gap-4">
                            <h1 className="text-3xl text-slate-50 font-semibold">Profissional do agora</h1>
                            <CarouselCourses items={dataFormations} />
                        </div>

                        <div className="w-full h-auto flex flex-col gap-4">
                            <h1 className="text-3xl text-slate-50 font-semibold">Profissional do agora</h1>
                            <CarouselCourses items={dataFormations} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}