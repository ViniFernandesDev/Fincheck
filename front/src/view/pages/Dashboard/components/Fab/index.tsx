import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
    return (
        <div className="fixed bottom-4 right-4">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <button className=" bg-teal-900 text-white h-12 w-12 rounded-full flex items-center justify-center" >
                        <PlusIcon className="w-7 h-7" />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                    <DropdownMenu.Item className="gap-2">
                        <CategoryIcon type='expense' />
                        Nova Receita
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="gap-2">
                        <CategoryIcon type='income' />
                        Nova Despesa
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="gap-2">
                        <BankAccountIcon />
                        Nova Conta
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}