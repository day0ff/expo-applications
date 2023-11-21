import React, {useCallback, useEffect, useMemo, useState} from "react";
import {View, Image, Platform} from 'react-native';

import {useStyles} from "./styles";

import type {FC} from "react";
import type {SpriteType} from "./types";

const Sprite: FC<SpriteType> = ({
                                    isRunning = true,
                                    width,
                                    height,
                                    source,
                                    from = 1,
                                    to = Infinity,
                                    position: startPosition = 1,
                                    interval = 50
                                }) => {
    const styles = useStyles();

    const {
        width: initialSpriteWidth,
        height: initialSpriteHeight
    } = Platform.OS !== 'web' ? Image.resolveAssetSource(source) : {width: undefined, height: undefined};

    const [imageWidth, setImageWidth] = useState<number | undefined>(initialSpriteWidth);
    const [imageHeight, setImageHeight] = useState<number | undefined>(initialSpriteHeight);
    const [, setTimer] = useState<NodeJS.Timeout>();
    const [position, setPosition] = useState<number>(Math.max(startPosition, from));

    const spriteRef = Platform.OS === 'web' && useCallback((node: HTMLDivElement) => {
        if (!node) return;

        const resizeObserver = new ResizeObserver(([imgParentDivElement]) => {
            const {clientWidth, clientHeight} = imgParentDivElement.target;

            if (clientWidth) setImageWidth(clientWidth);
            if (clientHeight) setImageHeight(clientHeight);
        });
        resizeObserver.observe(node);
    }, []);

    const steps = useMemo(() => (width && imageHeight && imageWidth && Math.trunc(imageWidth / imageHeight) || 0), [imageHeight, imageWidth]);

    const animate = () => {
        setPosition((currentPosition = 0) => {
            const newPosition = currentPosition + 1;

            return newPosition > Math.min(to, steps) ? Math.min(from, steps) : newPosition;
        });
    };

    useEffect(() => {
        if (steps) setPosition(() => Math.min(Math.max(startPosition, from), steps));
    }, [from, startPosition, steps]);

    useEffect(() => {
        if (isRunning && steps) {
            const id = setInterval(animate, interval);

            setTimer(id);

            return () => clearInterval(id)
        }
    }, [isRunning, steps]);

    const ratio = useMemo(() => (imageHeight && height / imageHeight), [height, imageHeight]);
    const spriteWidth = useMemo(() => (ratio && imageWidth && ratio * imageWidth), [width, imageWidth, ratio]);
    const left = -(position - 1) * width;

    // @ts-ignore
    const getWebImage = () => Platform.OS === 'web' && <Image ref={spriteRef} source={source} style={styles.imgHidden}/>

    return (
        <View style={{width, height, overflow: 'hidden'}}>
            {getWebImage()}
            <Image source={source} style={{...styles.img, width: spriteWidth, height, left}}/>
        </View>
    );
}

export default Sprite;