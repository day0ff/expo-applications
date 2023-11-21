import {useTranslation} from "react-i18next";
import {useNavigation} from "@react-navigation/native";
import {Text, View, Button} from 'react-native'
import type {ParamListBase} from "@react-navigation/native";
import type {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {Styles} from "./styles";
import React from "react";

const Test = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={Styles.container}>
            <Text>{t`page.test.title`}</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    );
}

export default Test;
