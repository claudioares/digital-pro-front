import { Header } from "./components/Header/header"
import { CardFormations } from "./components/card/card";
import { CarouselDefault } from "./components/carousel/carousel.bunner";
import { Container } from "./components/container/container";
import { FooterFixed } from "./components/footer-fixed/footer.fixed";
import { Footer } from "./components/footer/footer";
import { LoadingPage } from "./components/loading/loading_page";
import { OfferDetails } from "./components/offer-details/offer.details";
import { dataFormations } from "./utils/data.formations";
import { Outlet } from 'react-router-dom';

type CrdProjectProps = {
  img: string,
  span: string | undefined,
  title: string,
  description: string | undefined,
  href:string
}

export function App() {

  return (
    <>
    <LoadingPage>
      <div className="w-full min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 mb-24">
        <Header />
        <Outlet />
        <CarouselDefault />
        <Container>
          <h1 className="text-4xl font-semibold border-l-[0.6rem] border-yellow-500 px-4 text-slate-300 my-10">Saiba mais sobre nossas formações</h1>
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            {dataFormations.map((data:CrdProjectProps, index:number)=>(
              <CardFormations 
                title={data.title} 
                description={data.description}
                img={data.img} 
                span={data.span}
                key={index}
              />
            ))}
          </div>
        </Container>

        <OfferDetails />
        <Footer />
      </div>
      <FooterFixed />
      </LoadingPage>
    </>
  )
}

export default App
