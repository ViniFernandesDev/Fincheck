import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker, getDefaultClassNames  } from 'react-day-picker';
import { capitalizeFirstLetter } from '../../app/utils/capitalizeFirstLetter';

interface DatePickerProps {
    value: Date;
    onChange(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            locale={ptBR}
            selected={value}
            mode='single'
            onSelect={(date) => onChange?.(date ?? new Date())}
            classNames={{
                today: `${defaultClassNames.today} bg-green-100`, 
                selected: `!bg-green-900 border-amber-500 text-white`,
                root: `${defaultClassNames.root} shadow-lg p-5 text-center text-gray-900`,
                chevron: `${defaultClassNames.chevron} fill-green-500`,
                month_grid: `${defaultClassNames.month_grid} w-full`,
              }}
            formatters={{
                formatCaption: (date, options) => 
                    capitalizeFirstLetter(format(date, 'LLLL yyyy', options)),
            }} 
        />
    )
}