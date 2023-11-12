import {useCallback, useMemo, useState} from "react";
import {useColorScheme} from 'react-native';

import {light, dark} from "./colorScheme";
import {ThemeContext} from "./context";

import type {FC, PropsWithChildren} from "react";
import type {ThemeType, ColorSchemeType} from "./type";

const getTheme = (colorScheme: ColorSchemeType) => (colorScheme === "light" ? light : dark) as ThemeType;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const colorScheme = useColorScheme();

    const [theme, setTheme] = useState<ThemeType>(getTheme(colorScheme));

    const toggleTheme = useCallback(() => {
        setTheme(previousTheme => (previousTheme?.colorScheme === 'dark' ? light : dark) as ThemeType)
    }, []);

    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;