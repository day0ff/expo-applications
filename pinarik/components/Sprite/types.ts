import type {PressableProps, ViewProps} from "react-native";
import type {ImageSourcePropType} from "react-native/Libraries/Image/Image";
import type {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type SpriteType = Omit<PressableProps, "style"> & {
    isRunning?: boolean;
    width: number;
    height: number;
    source: ImageSourcePropType;
    from?: number;
    to?: number;
    position?: number;
    interval?: number;
    style?: ViewStyle;
    className?: string;
};
