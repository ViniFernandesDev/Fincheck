
import { DatePickerInput } from "../../../../../components/DatePickerInput";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";

import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
    const {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionType,
    } = useNewTransactionModalController();

    const isExpense = newTransactionType === 'EXPENSE'

    return (
        <Modal 
            open={isNewTransactionModalOpen} 
            onClose={closeNewTransactionModal} 
            title={isExpense ? 'Novo Despesa' : 'Nova Receita'}
        >
            <form action="">
                <div>
                    <span className="text-gray-600 tracking-[-0.5px] text-xs">
                        Valor {isExpense ? 'da despesa' : 'da receita'}
                    </span>

                    <div className="flex justify-center items-center gap-2">
                        <span className="text-gray-600 tracking-[-0.5px] text-lg">
                            R$
                        </span>
                        <InputCurrency/>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Input
                        type="text"
                        name="nameAccount"
                        placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
                    />

                    <Select 
                        placeholder="Categoria" 
                        options={[
                            {
                                value: 'INVESTMENT',
                                label: 'Investimentos'
                            },
                            {
                                value: 'CASH',
                                label: 'Dinheiro Físico'
                            },
                            {
                                value: 'CHECKING',
                                label: 'Conta corrente'
                            },
                        ]} 
                    />

                    <Select 
                        placeholder={isExpense ? 'Pagar com' : 'Receber com'} 
                        options={[
                            {
                                value: 'INVESTMENT',
                                label: 'Investimentos'
                            },
                            {
                                value: 'CASH',
                                label: 'Dinheiro Físico'
                            },
                            {
                                value: 'CHECKING',
                                label: 'Conta corrente'
                            },
                        ]} 
                    />

                    <DatePickerInput />
                </div>
            </form>
        </Modal>
    )
}