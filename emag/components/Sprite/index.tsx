import React, {useEffect, useMemo, useState} from "react";
import {Image, Pressable} from 'react-native';

import type {FC} from "react";
import type {SpriteType} from "./types";

const Sprite: FC<SpriteType> = (
    {
        isRunning = false,
        width,
        height,
        source,
        from = 1,
        to = Infinity,
        position: startPosition = 1,
        interval = 50,
        style = {},
        ...pressableProps
    }
) => {

    const {
        width: imageWidth,
        height: imageHeight
    } = Image.resolveAssetSource(source);

    const [, setTimer] = useState<NodeJS.Timeout>();
    const [position, setPosition] = useState<number>(Math.max(startPosition, from));

    const steps = useMemo(() => (imageHeight && imageWidth && Math.trunc(imageWidth / imageHeight) || 0), [imageHeight, imageWidth]);

    const ratio = useMemo(() => (imageHeight && height / imageHeight), [height, imageHeight]);
    const spriteWidth = useMemo(() => (ratio && imageWidth && ratio * imageWidth), [imageWidth, ratio]);
    const left = -(position - 1) * height;

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

    return (
        <Pressable style={{width, height, overflow: 'hidden', ...style}} {...pressableProps}>
            <Image source={source} style={{position: 'absolute', width: spriteWidth, height, left}}/>
        </Pressable>
    );
}

export default Sprite;
