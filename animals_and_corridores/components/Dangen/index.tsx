import React from "react";
import {useTranslation} from "react-i18next";

import {
    DangenFlatListItemStyled,
    DangenFlatListItemTextStyled,
    DangenFlatListStyled,
    DangenStyled,
    DangenTextStyled
} from "./styles";

import type {FC} from "react";
import type {ExampleType} from "./types";
import {map1} from "../../models/maps/map1";

const DATA = map1.flat().map(({position, text}) => ({id: `${position.y}${position.x}`, text}))

const Item = ({ text }: {text: string}) => {
    return (
        <DangenFlatListItemStyled>
            <DangenFlatListItemTextStyled>{text}</DangenFlatListItemTextStyled>
        </DangenFlatListItemStyled>
    );
};

const Dangen: FC<ExampleType> = ({}) => {
    const {t} = useTranslation();

    return (
        <DangenStyled>
            <DangenTextStyled>
                {t`component.dangen.title`}
            </DangenTextStyled>
            <DangenFlatListStyled
                data={DATA}
                numColumns={6}
                renderItem={({item}) => <Item text={item.text} />}
                keyExtractor={item => item.id}
            />
        </DangenStyled>
    );
}

export default Dangen;