import {createContext} from 'react';

import {light} from "./colorScheme";

import type {ThemeType} from "./type";

export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: light,
    toggleTheme: () => null,
});
