import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
    open: boolean;
    onClose(): void;
}

const mockedAccounts = [
    {
        id: '123',
        name: 'Nubank',
    },
    {
        id: '456',
        name: 'Itau',
    },
    {
        id: '789',
        name: 'Sicredi',
    },
]

export function FiltersModal({ open, onClose }: FiltersModalProps) {
    const {
        handleSelectBankAccount,
        selectedBankAccountId,
        handleChangeYear,
        selectedYear,
    } = useFiltersModal();

    return (
        <Modal open={open} onClose={onClose} title="Filtros">
            <div className="space-y-8">
                <div>
                    <span className='text-lg tracking-[-1px] font-bold text-gray-800'>
                        Conta
                    </span>

                    <div className="space-y-2 mt-2">
                        {mockedAccounts?.map(account => (
                            <button 
                                key={account.id} 
                                onClick={() => handleSelectBankAccount(account.id)}
                                className={cn(
                                    "py-2 px-3 rounded-2xl text-left w-full text-gray-800 hover:bg-gray-50 transition-colors",
                                    account.id === selectedBankAccountId && '!bg-gray-200'
                                    )}
                                >
                                {account.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-gray-800">
                    <span className='text-lg tracking-[-1px] font-bold text-gray-800'>
                        Ano
                    </span>

                    <div className="mt-2 w-48 flex items-center justify-between">
                        <button 
                            onClick={() => handleChangeYear(-1)}
                            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-50 transition-colors"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        <span className="text-sm font-medium tracking-[-0.5px]">
                            {selectedYear}
                        </span>

                        <button 
                            onClick={() => handleChangeYear(1)}
                            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-50 transition-colors"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                <Button className="w-full">
                    Aplicar Filtros
                </Button>
            </div>
        </Modal>
    )
}