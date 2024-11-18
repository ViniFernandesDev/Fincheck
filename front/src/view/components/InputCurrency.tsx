import { NumericFormat } from 'react-number-format'

export function InputCurrency() {
    return (
        <div>
            <NumericFormat 
                className="w-full text-gray-800 text-[32px] font-bold tracking-[-1px] outline-none"
                thousandSeparator="."
                decimalSeparator=','
                defaultValue='0,00'
            />
        </div>
    )
}