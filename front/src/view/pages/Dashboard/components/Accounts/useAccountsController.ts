import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountsController() {
    const windowWidth = useWindowWidth();
    const { areValuesVisible, toogleValueVisibility } = useDashboard();

    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return {
        sliderState, 
        setSliderState, 
        windowWidth,
        areValuesVisible,
        toogleValueVisibility,
        isLoading: false,
        accounts: [],
    }
}