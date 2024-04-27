import {useNavigation} from "@react-navigation/native";
import type {ParamListBase} from "@react-navigation/native";
import type {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Text, View, Button} from 'react-native'

import {Styles} from "./styles";

const NotFound = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={Styles.container}>
            <Text>404 Not Found</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    );
}

export default NotFound;
