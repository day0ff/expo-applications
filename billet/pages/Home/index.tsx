import {useTranslation} from "react-i18next";
import {useNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {Text, View, Button} from 'react-native'

import {ContainerStyled, StarStyled, TextStyled} from "./styles";
import i18n from "i18next";
import {useTheme} from "../../hooks";

const Home = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {toggleTheme} = useTheme();

    return (
        <ContainerStyled>
            <TextStyled>{t`page.home.title`}</TextStyled>
            <Button title="RU" onPress={() => i18n.changeLanguage('ru')}/>
            <Button title="EN" onPress={() => i18n.changeLanguage('en')}/>
            <Button title="Toggle Theme" onPress={toggleTheme}/>
            <StarStyled width={50} height={50} />
            <Button
                title="Go to Test"
                onPress={() => navigation.navigate("Test")}
            />
            <StatusBar style="auto"/>
        </ContainerStyled>
    );
}


export default Home;
