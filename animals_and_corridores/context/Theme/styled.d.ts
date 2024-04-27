import {} from 'styled-components';

import {ThemeType} from 'context/Theme/type';
import {DeviceType} from "hooks";

type ThemeWithDeviceType = ThemeType & DeviceType;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeWithDeviceType {}
}