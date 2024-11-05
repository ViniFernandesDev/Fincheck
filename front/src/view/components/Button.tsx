import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({className, ...props}: ButtonProps) {
    return (
        <button 
            {...props}
            className={cn(
                'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all',
                className,
            )}
        />
    )
}