import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";
import { useState } from "react";
import { formatDate } from "../../app/utils/formatDate";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface DatePickerInputProps {
    className?: string;
    error?: string;
}

export function DatePickerInput({ className, error }: DatePickerInputProps) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
              <Popover.Root>
                <Popover.Trigger>
                     <button
                        type="button"
                        className={cn(  
                            'flex items-center bg-white w-full rounded-lg border border-gray-500px-3 h-[52px] px-3 pt-4 border-gray-500 text-gray-700 focus:border-gray-800 transition-all outline-none text-left relative',
                            error && '!border-red-900',
                            className,
                        )}
                    >
                        
                        <span 
                            className="text-gray-700 text-xs left-[13px] top-2 pointer-events-none absolute"
                        >
                            Data
                        </span>

                        <span>
                            {formatDate(selectedDate)}
                        </span>
                    </button>
                </Popover.Trigger>

                <Popover.Content>
                    <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)} />
                </Popover.Content>

                {error && (
                    <div className="flex gap-2 mt-2 items-center text-red-900">
                        <CrossCircledIcon />
                        <span className="text-xs">{error}</span>
                    </div>
                )}
              </Popover.Root>
        </div>
    )
}