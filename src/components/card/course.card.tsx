'use client'
import Image from "next/image";
import { TagsStatusCard } from "../tag-status-card/tag.status.card";

type propsCarouselCourses = {
    stack: string,
    description: string,
    img: string,
    tags: string[]
}

export function CourseCard ({stack, description, img, tags}:propsCarouselCourses) {
   
    return (
        <>
        <div className="px-4">
            
            <div className="flex flex-col w-[25rem] h-[32rem] bg-zinc-800 rounded-3xl">
                <div className={`
                    w-full h-96 bg-slate-400 rounded-t-3xl flex items-center justify-center
                    relative  
                `}>
                    <Image src={img} alt="imagem da stack" className="h-full w-full object-cover absolute top-0 rounded-t-3xl"/>
                </div>
                <div className="w-auto h-full p-4 flex flex-col justify-around gap-4    ">
                    <div className="w-full flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <TagsStatusCard 
                                status={tag} 
                                colorText="text-slate-200"
                                key={index}
                            />
                        ))}
                       
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl text-slate-50 font-semibold">{stack}</h1>
                        <p className="text-slate-50 font-light">
                            {description.split('').slice(0, 200).join('').concat('...')}
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}