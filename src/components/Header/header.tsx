'use client'
import { Button } from "../button/button";
import Logo from '../../assets/logo.svg'
import { MenuBar } from "../menubar/menubar";
import { useState } from "react";
import Image from "next/image";


export function Header () {
    const [stateMenu, setStateMenu] = useState('hidden')

    return (
        <>
            <div className={`
                w-full h-auto py-2 flex items-center justify-around bg-zinc-900 text-slate-100 font-light text-xl
            `}>
                <Image src={Logo} alt="Logo da escola" className="w-28 "/>
                <ul className="w-auto gap-8 hidden lg:flex">
                    <div onMouseMove={()=>setStateMenu('fixed')} onMouseOut={()=>setStateMenu('hidden')}>
                        <li className={`
                            hover:text-yellow-500 hover:scale-105 hover:transition-transform hover:duration-700
                        `}><a href="">Cursos</a></li>
                        <MenuBar stateMenu={stateMenu}/>
                    </div>
                    <li className={`
                        hover:text-yellow-500 hover:scale-105 hover:transition-transform hover:duration-700
                    `}><a href="">Graduações</a></li>
                    <li className={`
                        hover:text-yellow-500 hover:scale-105 hover:transition-transform hover:duration-700
                    `}><a href="">Para empresas</a></li>
                    <li className={`
                        hover:text-yellow-500 hover:scale-105 hover:transition-transform hover:duration-700
                    `}><a href="">Gratuítos</a></li>
                    <li className={`
                        hover:text-yellow-500 hover:scale-105 hover:transition-transform hover:duration-700
                    `}><a href="">Vagas Abertas</a></li>
                </ul>
                <Button bg="bg-yellow-400" color="text-black" nameButton="Sou aluno" link={'/login'}/>
            </div>
        </>
    )
}