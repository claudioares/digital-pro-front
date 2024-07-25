import Image from "next/image"
import { Button } from "../button/button"
import { LoadingPage } from "../loading/loading_page"

type CrdProjectProps = {
    img: string,
    span: string | undefined,
    title: string,
    description: string | undefined,
}

export function CardFormations ({img, span, title, description}:CrdProjectProps) {

    return(
        <>
            <LoadingPage>
            <a 
                href="/subscribe"
                target="_blank"  
                className={`
                    hover:scale-[104%] hover:transition-transform hover:duration-500 hover:opacity-90
                `}
            >
                <div className={`
                    flex flex-col gap-4 w-64 h-[30rem] border 
                    border-gray-400 shadow-2xl shadow-slate-600 p-4 
                    bg-black bg-opacity-80 rounded-xl
                `}>
                    <div className='w-full max-h-36 flex items-center justify-center'>
                        <Image src={img} alt='Project image' className='w-full h-full object-cover'/>
                    </div>
                    <div>
                        <span className='text-gray-400 font-medium'>{span}</span>
                        <h1 className='text-white text-lg font-bold'>{title}</h1>
                    </div>
                    <p className='text-sm font-thin h-56 text-gray-400'>
                        {description?.split('').slice(0, 200).join('').concat('...')}
                    </p>

                    <div className='w-full flex items-center justify-center'>
                        <Button nameButton='Saiba mais ...' bg="" color="text-gray-400"/>
                    </div>
                </div>
            </a>
            </LoadingPage>
        </>
    )
}