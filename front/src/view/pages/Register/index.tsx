import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useRegisterController } from "./useRegisterController";

export function Register() {
    const { handleSubmit, register, errors } = useRegisterController();

    return (
        <div className="w-full">
        <header className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-[-0.5px]">Crie sua conta</h1>

            <p className="space-x-2">
                <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
                <Link 
                    to="/login" 
                    className="font-medium text-teal-900 tracking-[-0.5px]">Fazer login
                </Link>
            </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
            <Input 
                placeholder="Nome" 
                error={errors.name?.message}   
                {...register('name')}              
            />

            <Input 
                placeholder="E-mail" 
                type="email"   
                error={errors.email?.message}   
                {...register('email')}              
            />
            
            <Input 
                placeholder="Senha" 
                type="password" 
                error={errors.password?.message}   
                {...register('password')}
            />

            <Button type="submit" className="mt-2">
                Criar conta
            </Button>
        </form>
    </div>
    )
}