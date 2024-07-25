import logo from '../../assets/logo.svg';
import { Button } from '../button/button';
import { Container } from '../container/container';
import linkedin from '../../assets/social_icons/icons8-linkedin.svg';
import facebook from '../../assets/social_icons/icons8-facebook.svg';
import instagram from '../../assets/social_icons/icons8-instagram.svg';
import youtube from '../../assets/social_icons/icons8-youtube.svg';
import { Input } from '../input/input';
import Image from 'next/image';
export function Footer () {
    return(
        <>
            <div className="w-full h-96 bg-zinc-900 mt-24 text-slate-100">
                <Container>
                <div className="grid grid-cols-3">
                    <section className='flex flex-col h-auto gap-10'>
                        <div>
                            <Image src={logo} alt="logo da empresa" className='w-44'/>
                            <ul>
                                <li className='hover:text-yellow-500'><a href="">Sobre</a></li>
                                <li className='hover:text-yellow-500'><a href="">Contato</a></li>
                                <li className='hover:text-yellow-500'><a href="">Privacidade</a></li>
                            </ul>
                        </div>

                        <span className='font-light italic'>Todos direitos reservados, 2024 - @DigitalPro</span>
                    </section>

                    <section className='w-full h-full flex flex-col justify-center items-center gap-8'>
                        <div className='flex flex-col gap-8'>
                            <Button nameButton={'Já sou aluno'} bg={'bg-green-700'} color={''} link={"/login"}/>
                            <Button nameButton={'Assessoria de imprensa'} bg={'bg-green-700'} color={''} />
                        </div>
                        <div className='flex'>
                            <Image src={linkedin} alt="logo do linkedin" className='w-20 cursor-pointer hover:scale-[104%] hover:transition-transform hover:duration-500'/>
                            <Image src={facebook} alt="logo do facebook" className='w-20 cursor-pointer hover:scale-[104%] hover:transition-transform hover:duration-500'/>
                            <Image src={instagram} alt="logo do instagram" className='w-20 cursor-pointer hover:scale-[104%] hover:transition-transform hover:duration-500'/>
                            <Image src={youtube} alt="logo do youtube" className='w-20 cursor-pointer hover:scale-[104%] hover:transition-transform hover:duration-500'/>
                        </div>
                    </section>

                    <section className='w-full h-full flex flex-col justify-center items-center gap-8'>
                        <div className='w-full'>
                            <p className='font-medium text-2xl w-full'>Ei, tá esperando o que para assinar nossa <span className='text-yellow-600'>newsletter?</span></p>
                        </div>
                        <form action=""  className='flex flex-col gap-8 w-full'>
                            <Input placeholder='Escreva seu nome' idInput='name'/>
                            <Input placeholder='Escreva seu email' idInput='email'/>
                        </form>
                    </section>
                </div>
                </Container>
            </div>
        </>
    )
}