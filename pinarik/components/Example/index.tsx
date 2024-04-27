import React from "react";
import {useTranslation} from "react-i18next";

import {ExampleStyled, ExampleTextStyled} from "./styles";

import type {FC} from "react";
import type {ExampleType} from "./types";

const Example: FC<ExampleType> = ({}) => {
    const {t} = useTranslation();

    return (
        <ExampleStyled>
            <ExampleTextStyled>
                {t`example.text`}
            </ExampleTextStyled>
        </ExampleStyled>
    );
}

export default Example;