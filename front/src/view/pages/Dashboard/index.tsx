import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts/Accounts";
import { Transactions } from "./components/Transactions/Transactions";

export function Dashboard() {
    return (
        <div className="h-full w-full m flex flex-col gap-4 p-4 md:px-8 md:pb-8 md:pt-6">
            <header className="flex items-center justify-between">
                <Logo className="h-6 text-teal-900" />

                <UserMenu />
            </header>

            <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
                <div className="w-full md:w-1/2">
                    <Accounts />
                </div>
                
                <div className="w-full md:w-1/2">
                    <Transactions />
                </div>
            </main>
        </div>
    )
}