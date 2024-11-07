
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
    const swiper = useSwiper();

    return (
        <>
            <button
                onClick={() => swiper.slidePrev()} 
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-r from-gray-100 to-transparent w-12 h-12 flex justify-center items-center z-10"
            >
                <ChevronLeftIcon className="text-gray-800 w-6 h-6" />
            </button>

            <button
                onClick={() => swiper.slideNext()} 
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-l from-gray-100 to-transparent to- w-12 h-12 flex justify-center items-center z-10"
            >
                <ChevronRightIcon className="text-gray-800 w-6 h-6" />
            </button>
        </>
    )
}