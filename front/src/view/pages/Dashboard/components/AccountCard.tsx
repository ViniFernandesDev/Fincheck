
import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";

interface AccountCardProps {
    color: string;
    name: string;
    balance: number;
    type: 'CASH' | 'CHECKING' | 'INVESTMENT';
}

export function AccountCard({color, name, balance}: AccountCardProps) {
    return (
        <div 
            className="bg-white p-4 rounded-lg flex flex-col justify-between h-[200px] border-b-4 border-teal-950" 
            style={{ borderColor: color }} // cor da borda dinâmica que irá receber do back-end
        >
            <div>
                <BankAccountTypeIcon type="CASH" />

                <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
                    {name}
                </span>
            </div>

            <div>
                <span className="text-gray-800 font-medium tracking-[-0.5px] block">
                    {formatCurrency(balance)}
                </span>

                <small className="text-gray-600 text-sm">
                    Saldo Atual
                </small>
            </div>
        </div>
    )
}