import {useMediaQuery} from "react-responsive";

export const useDevice = () => {
    const isMobile = useMediaQuery({maxWidth: 480});
    const isTablet = useMediaQuery({minWidth: 481, maxWidth: 768});
    const isLaptop = useMediaQuery({minWidth: 769, maxWidth: 1024});
    const isDesktop = useMediaQuery({minWidth: 1025, maxWidth: 1200});
    const isTV = useMediaQuery({minWidth: 1201});

    const isTabletCascade = useMediaQuery({maxWidth: 768});
    const isLaptopCascade = useMediaQuery({maxWidth: 1024});
    const isDesktopCascade = useMediaQuery({maxWidth: 1200});

    return ({isMobile, isTablet, isLaptop, isDesktop, isTV, isTabletCascade, isLaptopCascade, isDesktopCascade});
}

export type DeviceType = ReturnType<typeof useDevice>;
