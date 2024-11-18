import { useState } from "react";
import { ChevronDownIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { DropdownMenu } from "./DropdownMenu";
import { ColorIcon } from "./icons/ColorIcon";

import { cn } from "../../app/utils/cn";

interface ColorsDropDownInputProps {
    className?: string;
    error?: string;
}

type Color = {
    color: string;
    bg: string;
  };
  
const colors: Color[] = [
    { color: '#868E96', bg: '#F8F9FA' },
    { color: '#FA5252', bg: '#FFF5F5' },
    { color: '#E64980', bg: '#FFF0F6' },
    { color: '#BE4BDB', bg: '#F8F0FC' },
    { color: '#7950F2', bg: '#F3F0FF' },
    { color: '#4C6EF5', bg: '#EDF2FF' },
    { color: '#228BE6', bg: '#E7F5FF' },
    { color: '#15AABF', bg: '#E3FAFC' },
    { color: '#12B886', bg: '#E6FCF5' },
    { color: '#40C057', bg: '#EBFBEE' },
    { color: '#82C91E', bg: '#F4FCE3' },
    { color: '#FAB005', bg: '#FFF9DB' },
    { color: '#FD7E14', bg: '#FFF4E6' },
    { color: '#212529', bg: '#F8F9FA' },
];

export function ColorsDropDownInput({ className, error }: ColorsDropDownInputProps) {
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);

    function handleSelect(color: Color) {
        setSelectedColor(color);
    }

    return (
       <div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <button
                        className={cn(  
                            'flex items-center bg-white w-full rounded-lg border border-gray-500px-3 h-[52px] px-3 border-gray-500 text-gray-700 focus:border-gray-800 transition-all outline-none text-left relative',
                            error && '!border-red-900',
                            className,
                        )}
                    >
                        Cor
                        <div className="absolute right-3">
                            {selectedColor ? (
                                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
                            ) : (
                                <ChevronDownIcon className="h-6 w-6 text-gray-800 " />
                            )}
                        </div>
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className="z-[99] grid grid-cols-4">
                    {colors.map(color => (
                        <DropdownMenu.Item 
                            key={color.color}
                            onSelect={() => handleSelect(color)}
                        >
                            <ColorIcon color={color.color} bg={color.bg} />
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            {error && (
                <div className="flex gap-2 mt-2 items-center text-red-900">
                    <CrossCircledIcon />
                    <span className="text-xs">{error}</span>
                </div>
            )}
       </div>
    )
}