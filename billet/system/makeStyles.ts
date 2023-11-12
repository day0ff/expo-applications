import {useMemo} from "react";
import {StyleSheet} from "react-native";

import {useTheme, useDevice} from "hooks";

import {ImageStyle, TextStyle, ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import type {ThemeType} from "context/Theme/type";
import type {DeviceType} from "hooks";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

type ThemeWithDeviceType = ThemeType & DeviceType;

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(styles: (theme: ThemeWithDeviceType, props?: unknown) => T) => (props?: unknown) => {
    const {theme} = useTheme();
    const device = useDevice();

    return useMemo(() => {
        return StyleSheet.create(styles({...theme, ...device}, props));

    }, [props, theme, device]);
};