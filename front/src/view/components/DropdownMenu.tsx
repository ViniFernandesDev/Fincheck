import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../app/utils/cn";

function DropdownMenuRoot({ children }: { children: React.ReactNode}) {
    return (
        <RdxDropdownMenu.Root>
            {children}
        </RdxDropdownMenu.Root>
    )
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode}) {
    return (
        <RdxDropdownMenu.Trigger className="outline-none">
            {children}
        </RdxDropdownMenu.Trigger>
    )
}

interface DropdownMenuMenuContentProps {
    children: React.ReactNode,
    className?: string;
}

function DropdownMenuContent({ children, className }: DropdownMenuMenuContentProps) {
    return (
        <RdxDropdownMenu.Portal>
            <RdxDropdownMenu.Content 
                className={cn(
                    "rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] data-[side=bottom]: animate-slide-up-and-fade z-50",
                    className,
                )}
            >
                {children}
            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    )
}

interface DropdownMenuMenuItemProps {
    children: React.ReactNode,
    className?: string;
    onSelect?(): void;
}

function DropdownMenuItem({ children, className, onSelect }: DropdownMenuMenuItemProps ) {
    return (
        <RdxDropdownMenu.Item 
            onSelect={onSelect}
            className={cn(
                "min-h-[40px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 rounded-2xl data-[highlighted]:bg-gray-100 cursor-pointer transition-colors",
                className,
            )}
        >
            {children}
        </RdxDropdownMenu.Item>
    )
}

export const DropdownMenu = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
}