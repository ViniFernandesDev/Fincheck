import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";

export function Accounts() {
    return (
        <div className="flex flex-col bg-teal-900 rounded-2xl w-full h-full px-4 py-6 md:p-10 ">
            <div className="flex flex-col">
                <span className="tracking-[-0.5px] text-white">Saldo Total</span>

                <div className="flex items-center gap-2">
                    <strong className="text-2xl tracking-[-1px] text-white">R$ 100,00</strong>

                    <button className="w-8 h-8 flex items-center justify-center">
                        <EyeIcon open/>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-end flex-col">
                <div className="flex justify-between items-center">
                    <strong className="text-white tracking-[-0.5px] text-lg">
                        Minhas contas
                    </strong>

                    <div>
                        <button disabled className="py-3 pl-2.5 pr-3 rounded-full enabled:hover:bg-black/10 transition-all disabled:opacity-40">
                            <ChevronLeftIcon className="text-white w-6 h-6" />
                        </button>
                        <button className="py-3 pl-2.5 pr-3 rounded-full enabled:hover:bg-black/10 transition-all disabled:opacity-40">
                            <ChevronRightIcon className="text-white w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="mt-4 grid">
                    <AccountCard color='#7950F2' name="Nubank" balance={1000.23} type="CASH" />

                    <AccountCard color='#0f0' name="XP" balance={256.23} type="INVESTMENT" />
                </div>
            </div>
        </div>
    )
}