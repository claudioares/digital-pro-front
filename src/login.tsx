import { Button } from "./components/button/button";
import { Container } from "./components/container/container";
import { Input } from "./components/input/input";
import { Mask } from "./components/mask/mask";
import logo from "../src/assets/logo.svg";
import { handleNavigation } from "./utils/useNavigate";
import { LoadingPage } from "./components/loading/loading_page";


export function Login () {
  
    return(
        <>
            <LoadingPage>
            <div className="w-full h-full flex">
                    <section className={`
                        w-full h-screen flex flex-col gap-4 justify-center items-center bg-zinc-900
                        md:w-[50%]
                    `}>
                        <Container>
                            <div className="flex flex-col gap-12">
                                <div>
                                    <h1 className={`
                                        text-4xl text-yellow-300 font-bold
                                    `}>Login</h1>
                                    <h3 className={`
                                        text-2xl text-gray-400 font-light
                                    `}>Bem-vindo a sua plataforma de estudos de tecnologia!</h3>
                                </div>

                                <div className={`w-full h-auto flex flex-col gap-6`}>
                                    <Input idInput="Login" placeholder="Digite aquí seu email cadastrado na plataforma"/>
                                    <Input idInput="Password" placeholder="Digite aquí sua senha cadastrada na plataforma"/> 
                                </div>

                                <div className="flex flex-col gap-6">
                                    <span className={`
                                        text-yellow-300 text-xl underline cursor-pointer hover:opacity-90
                                    `}>Precisa criar ou redefinir sua senha?</span>
                                    <Button
                                        nameButton="Entrar" 
                                        bg="bg-yellow-400"
                                        onClick={()=>handleNavigation('/home')}
                                        color=""
                                    />
                                </div>

                                <div className={`flex flex-col gap-2`}>
                                    <span className={`
                                        text-gray-400 font-light text-xl
                                    `}>Ainda não é assinante?</span>
                                    <Button 
                                        nameButton="Assine agora" 
                                        bg="bg-white" 
                                        onClick={()=>handleNavigation('/')}
                                        color=""
                                    />
                                </div>
                            </div>
                        </Container>
                    </section>
                <section className={`
                     w-[50%] min-h-full bg-bg-login bg-center bg-cover
                     hidden items-end justify-end relative
                    md:flex
                `}>
                    <Mask />
                    <img src={logo} alt="Logo da empresa" className="fixed w-52 h-52"/>
                </section>
            </div>
            </LoadingPage>
        </>
    )
}