import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";

import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";

export function Transactions() {
    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl w-full h-full px-4 py-6 md:p-10">
            <header>
                <div className="flex justify-between w-full">
                    <button className="flex items-center gap-2 transition-all">
                        <TransactionsIcon />
                        <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
                        <ChevronDownIcon className="text-gray-900" />
                    </button>
                
                    <button>
                        <FilterIcon/>
                    </button>
                </div>

                <div className="mt-6 relative flex">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={3}
                        centeredSlides
                    >
                        <SliderNavigation />
                        
                        {MONTHS.map((month, index) => (
                            <SwiperSlide key={month}>
                                {({ isActive }) => (
                                    <SliderOption 
                                        isActive={isActive} 
                                        month={month} 
                                        index={index}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </header>

            <section className="mt-4 space-y-2 flex-1 overflow-y-auto">
                <div className="bg-white flex justify-between items-center p-4 gap-4 rounded-lg">
                    <div className="flex gap-3 flex-1 items-center">
                        <CategoryIcon type='expense' />

                        <div>
                            <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                            <span className="text-sm text-gray-600 block">12/12/2024</span>
                        </div>
                    </div>

                    <span className="text-red-800 tracking-[-0.5.px] font-medium"> - {formatCurrency(100)}</span>
                </div>

                <div className="bg-white flex justify-between items-center p-4 gap-4 rounded-lg">
                    <div className="flex gap-3 flex-1 items-center">
                        <CategoryIcon type='income' />

                        <div>
                            <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                            <span className="text-sm text-gray-600 block">12/12/2024</span>
                        </div>
                    </div>

                    <span className="text-green-800 tracking-[-0.5.px] font-medium"> + {formatCurrency(100)}</span>
                </div>

                
            </section>
        </div>
    )
}