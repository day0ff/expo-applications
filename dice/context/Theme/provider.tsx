import React, {useCallback, useMemo, useState} from "react";
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {light, dark} from "./colorScheme";
import {ThemeContext} from "./context";

import type {FC, PropsWithChildren} from "react";
import type {ThemeType, ColorSchemeType} from "./type";
import {useDevice} from "../../hooks";

const getTheme = (colorScheme: ColorSchemeType) => (colorScheme === "light" ? light : dark) as ThemeType;

const ThemeProviderComponent: FC<PropsWithChildren> = ({children}) => {
    const colorScheme = useColorScheme();
    const device = useDevice();

    const [theme, setTheme] = useState<ThemeType>(getTheme(colorScheme));

    const toggleTheme = useCallback(() => {
        setTheme(previousTheme => (previousTheme?.colorScheme === 'dark' ? light : dark) as ThemeType)
    }, []);

    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme]);

    const themeWithDevice = {...theme, ...device};

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={themeWithDevice}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProviderComponent;