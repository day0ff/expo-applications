import React from "react";
import {StatusBar} from "react-native";

import {HomeStyled} from "./styles";

const Home = () => {
    return (
        <HomeStyled>
            <StatusBar hidden/>
        </HomeStyled>
    )
}

export default Home;
