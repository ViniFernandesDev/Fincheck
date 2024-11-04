import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button 
            {...props}
            className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all"
        />
    )
}