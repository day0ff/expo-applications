import type {ImageSourcePropType} from "react-native/Libraries/Image/Image";

export type SpriteType = {
    isRunning?: boolean;
    width: number;
    height: number;
    source: ImageSourcePropType;
    from?: number;
    to?: number;
    position?: number;
    interval?: number;
};
