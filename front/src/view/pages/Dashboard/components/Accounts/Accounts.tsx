
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore 
import 'swiper/css';

import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

export function Accounts() {
    const { 
        sliderState,
        setSliderState,
        windowWidth,
        areValuesVisible,
        toogleValueVisibility,
        isLoading,
    } = useAccountsController();

    return (
        <div className="flex flex-col bg-teal-900 rounded-2xl w-full h-full px-4 py-6 md:p-10 justify-between">
            {isLoading && (
                <div className="h-full w-full flex items-center justify-center">
                    LOADING...
                </div>
            )}

            {!isLoading && (
            <>
                <div className="flex flex-col">
                    <span className="tracking-[-0.5px] text-white">Saldo Total</span>

                    <div className="flex items-center gap-2">
                        <strong className={cn(
                            "text-2xl tracking-[-1px] text-white",
                            !areValuesVisible && 'blur-md'
                        )}>
                            {formatCurrency(110)}
                        </strong>

                        <button onClick={toogleValueVisibility} className="w-8 h-8 flex items-center justify-center">
                            <EyeIcon open={!areValuesVisible} />
                        </button>
                    </div>
                </div>
                
                <div>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={windowWidth >= 500 ? 2.1 :1.1 }
                        onSlideChange={swiper => {
                            setSliderState({
                                isBeginning: swiper.isBeginning,
                                isEnd: swiper.isEnd,
                            })
                        }}
                    >
                        <div className="flex justify-between items-center pb-2" slot='container-start'>
                            <strong className="text-white tracking-[-0.5px] text-lg">
                                Minhas contas
                            </strong>
                            <SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
                        </div>
            
                        <SwiperSlide>
                            <AccountCard color='#7950F2' name="Nubank" balance={1000.23} type="CASH" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard color='#0f0' name="XP" balance={256.23} type="INVESTMENT" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard color='#0f0' name="XP" balance={256.23} type="INVESTMENT" />
                        </SwiperSlide>
                    </Swiper>
                    
                
                </div>
            </>
            )}
        </div>
    )
}