
import { ColorsDropDownInput } from "../../../../../components/ColorsDropDownInput";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";

import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
    const {
        isNewAccountModalOpen,
        closeNewAccountModal,
    } = useNewAccountModalController();

    return (
        <Modal open={isNewAccountModalOpen} onClose={closeNewAccountModal} title="Nova conta">
            <form action="">
                <div>
                    <span className="text-gray-600 tracking-[-0.5px] text-xs">
                        Saldo
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
                        placeholder="Nome da conta"
                    />

                    <Select 
                        placeholder="Tipo" 
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

                    <ColorsDropDownInput />
                </div>
            </form>
        </Modal>
    )
}