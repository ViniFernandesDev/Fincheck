import { Outlet } from 'react-router-dom';
import { Logo } from "../components/Logo"
import illustration from "../../assets/ilustration.png"


export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-full h-full flex items-center justify-center lg:w-1/2 p-4">
                <div className="flex-col flex items-center gap-16 min-w-[440px] ">
                    <Logo className='text-gray-500 h-6' />
                
                    <Outlet />
                </div>
            </div>

            <div className="w-1/2 h-full justify-center items-center p-8 hidden lg:flex">
                <div className="w-full min-h-[960px] max-w-[656px] relative">
                    <img 
                        src={illustration} 
                        className="absolute object-contain w-full h-full max-w-[656px] max-h-[960px] select-none rounded-b-[32px]"  
                    />

                    <div className="bg-white max-w-[656px] p-10 absolute bottom-0 rounded-b-[32px]">
                        <Logo className='text-teal-900 h-8' />

                        <p className="text-gray-700 font-medium text-xl mt-6">Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}