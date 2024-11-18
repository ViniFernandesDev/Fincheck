import { useState } from "react";
import * as RdxSelect from "@radix-ui/react-select";

import {
	ChevronDownIcon,
	ChevronUpIcon,
    CrossCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";

interface SelectProps {
    className?: string;
    error?: string;
    placeholder?: string;
    options: {
        value: string;
        label: string;
    }[];
}

export function Select({ className, error, placeholder, options }: SelectProps) {
    const [selectedValue, setSelectedValue] = useState<string>('')

    function handleSelect(value: string) {
        setSelectedValue(value)
    }

    return (
        <div>
            <div className="relative">
                <label className={cn(
                    "absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none",
                    selectedValue && 'text-xs left[-13px] top-2 transition-all translate-y-0 text-green-900'
                )}>
                    {placeholder}
                </label>

                <RdxSelect.Root onValueChange={handleSelect}>
                    <RdxSelect.Trigger
                    className={cn(  
                            'flex items-center bg-white w-full rounded-lg border border-gray-500px-3 h-[52px] px-3 pt-4 border-gray-500 text-gray-800 focus:border-gray-800 transition-all outline-none text-left relative',
                            error && '!border-red-900',
                            className,
                        )}
                    >
                        <RdxSelect.Value />

                        <RdxSelect.Icon className="absolute right-2">
                            <ChevronDownIcon className="h-6 w-6 text-gray-800" />
                        </RdxSelect.Icon>
                    </RdxSelect.Trigger>
                    <RdxSelect.Portal>
                        <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
                            <RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                                <ChevronUpIcon />
                            </RdxSelect.ScrollUpButton>

                            <RdxSelect.Viewport className="p-2">                         
                                {options.map(option => (
                                    <RdxSelect.Item
                                        key={option.value}
                                        className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold data-[state=highlighted]:bg-gray-50 cursor-pointer rounded-md hover:bg-gray-100 transition-all" 
                                        value={option.value}
                                    >
                                        <RdxSelect.ItemText>
                                            {option.label}
                                        </RdxSelect.ItemText>
                                    </RdxSelect.Item>
                                ))}
                            </RdxSelect.Viewport>

                            <RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                                <ChevronDownIcon />
                            </RdxSelect.ScrollDownButton>
                        </RdxSelect.Content>
                    </RdxSelect.Portal>
                </RdxSelect.Root>
            </div>
        
            {error && (
                <div className="flex gap-2 mt-2 items-center text-red-900">
                    <CrossCircledIcon />
                    <span className="text-xs">{error}</span>
                </div>
            )}
       </div>
    )
}

