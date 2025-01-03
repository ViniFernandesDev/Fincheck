import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";

export function UserMenu() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100">
                <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
                V
                </span>
            </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="w-32">
                <DropdownMenu.Item 
                    onSelect={() => alert('sair')}
                    className='justify-between gap-2'
                >
                    Sair
                    <ExitIcon className="w-4 h-4" />
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}