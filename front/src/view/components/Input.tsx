import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from '@radix-ui/react-icons'

import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
    name: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, name, id, error, className, ...props }, ref) => {
        const inputId = id ?? name;
    
        return (
            <div className="relative flex item-center flex-col">
                <input 
                    ref={ref}
                    id={inputId}
                    name={name}
                    placeholder=" "
                    {...props} 
                    className={cn(  
                        'bg-white w-full rounded-lg border border-gray-500 pt-4 px-3 h-[52px] text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
                        error && '!border-red-900',
                        className,
                    )}
                    
                />
    
                <label htmlFor={inputId} className="absolute text-xs left-[13px] top-2 pointer-events-none text-green-900 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
                    {placeholder}
                </label>

                {error && 
                    <div className="flex items-center gap-1 pt-1 text-red-900">
                        <CrossCircledIcon/>

                        <span className="text-xs">
                            {error}
                        </span>
                    </div>
                }
            </div>
        )
    }
);