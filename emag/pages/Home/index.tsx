import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {Text, View, Button} from 'react-native'

import Cat from 'assets/yellow-cat.png';
import Star from 'assets/star-fill.svg';

import i18n from "i18next";
import {useTheme} from "hooks";
import Sprite from "components/Sprite";

import {useStyles} from "./styles";

const Home = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const styles = useStyles();
    const {toggleTheme} = useTheme();

    const [isRunning, setIsRunning] = useState(false);
    const [position, setPosition] = useState(1);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t`page.home.title`}</Text>
            <View>
                <Sprite isRunning={isRunning} width={200} height={200} source={Cat} position={position}/>
            </View>
            <Button title="Toggle Run" onPress={() => setIsRunning(cur => !cur)}/>
            <Button title="New From" onPress={() => setPosition(4)}/>
            <Button title="RU" onPress={() => i18n.changeLanguage('ru')}/>
            <Button title="EN" onPress={() => i18n.changeLanguage('en')}/>
            <Button title="Toggle Theme" onPress={toggleTheme}/>
            <Star width={50} height={50} color={styles.star.color}/>
            <Button
                title="Go to Test"
                onPress={() => navigation.navigate("Test")}
            />
            <StatusBar style="auto"/>
        </View>
    );
}


export default Home;
