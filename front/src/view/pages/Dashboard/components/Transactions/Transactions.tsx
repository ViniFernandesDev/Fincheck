import { ChevronDownIcon } from "@radix-ui/react-icons";

import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";

import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";



export function Transactions() {
    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl w-full h-full px-4 py-6 md:p-10">
            <header className="">
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

            <section className="mt-4">
      
            </section>
        </div>
    )
}