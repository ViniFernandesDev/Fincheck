import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="w-full">
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-[-0.5px]">Entre em sua conta</h1>

                <p className="space-x-2">
                    <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
                    <Link 
                        to="/register" 
                        className="font-medium text-teal-900 tracking-[-0.5px]">Crie uma conta
                    </Link>
                </p>
            </header>

            <form className="mt-[60px] flex flex-col gap-4">
                <input type="email" />
                <input type="password" />
                <button type="submit" className="mt-2">Entrar</button>
            </form>
        </div>
    )
}