import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import emptyTransactions from "../../../../../assets/emptyTransactions.svg";
import { FiltersModal } from "./FiltersModal";
import { TransactionTypeDropDown } from "./TransactionTypeDropDown";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

import { useTransactionsController } from "./useTransactionsController";

export function Transactions() {
    const { 
        areValuesVisible,
        isInitialLoading,
        isLoading,
        transactions,
        handleCloseFiltersModal,
        handleOpenFiltersModal,
        isFiltersModalOpen,
     } = useTransactionsController();

     const hasTransactions = transactions.length > 0;

    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl w-full h-full px-4 py-6 md:p-10">
            {isInitialLoading && (
                <div className="h-full w-full flex items-center justify-center">
                    LOADING...
                </div>
            )}

            {!isInitialLoading && (
            <>
                <FiltersModal open={isFiltersModalOpen} onClose={handleCloseFiltersModal} />

                <header>
                    <div className="flex justify-between w-full">
                        <TransactionTypeDropDown />
                    
                        <button onClick={handleOpenFiltersModal} className="h-12 w-12 pt-1 flex items-center justify-center rounded-full hover:bg-green-50 transition-colors">
                            <FilterIcon />
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
                    {isLoading && (
                        <div className="flex h-full justify-center items-center gap-6 flex-col">
                            Carregando
                        </div>
                    )}    

                    {(!hasTransactions && !isLoading) && (
                        <div className="flex h-full justify-center items-center gap-6 flex-col">
                            <img src={emptyTransactions} />
                            <span className="text-gray-700">Não encontramos nenhuma transação!</span>
                        </div>
                    )}

                    {hasTransactions && !isLoading && (
                    <>
                        <div className="bg-white flex justify-between items-center p-4 gap-4 rounded-lg">
                            <div className="flex gap-3 flex-1 items-center">
                                <CategoryIcon type='expense' />

                                <div>
                                    <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                                    <span className="text-sm text-gray-600 block">12/12/2024</span>
                                </div>
                            </div>

                            <span className={cn(
                                "text-red-800 tracking-[-0.5.px] font-medium",
                                !areValuesVisible && 'blur-sm'
                            )}> - {formatCurrency(100)}</span>
                        </div>

                        <div className="bg-white flex justify-between items-center p-4 gap-4 rounded-lg">
                            <div className="flex gap-3 flex-1 items-center">
                                <CategoryIcon type='income' />

                                <div>
                                    <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                                    <span className="text-sm text-gray-600 block">12/12/2024</span>
                                </div>
                            </div>

                            <span className={cn(
                                "text-green-800 tracking-[-0.5.px] font-medium",
                                !areValuesVisible && 'blur-sm'
                            )}> - {formatCurrency(100)}</span>
                        </div>     
                    </>
                    )}
                       
                </section>
            </>
            )}
        </div>
    )
}