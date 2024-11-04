import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
    name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
    const inputId = id ?? name;

    return (
        <div className="relative flex item-center">
            <input 
                id={inputId}
                name={name}
                {...props} 
                className="bg-white w-full rounded-lg border border-gray-500 pt-4 px-3 h-[52px] text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none"
                placeholder=" "
            />

            <label htmlFor={inputId} className="absolute text-xs left-[13px] top-2 pointer-events-none text-green-900 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
                {placeholder}
            </label>
        </div>
    )
}