import {registerRootComponent} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// TODO remove new NativeEventEmitter Error
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

import i18n from 'app/i18n/config';
import ThemeProvider from "context/Theme/provider";

import Home from "../pages/Home";
import Test from "../pages/Test";
import NotFound from "../pages/NotFound";

i18n.t("");

const Stack = createNativeStackNavigator();

const linking = {
    prefixes: ['http://localhost:8081/', 'http://localhost:8081', 'localhost:8081'],
    config: {
        screens: {
            Home: '',
            Test: {
                path: 'test',
            },
            NotFound: '*',
        },
    },
};

const Index = () => {
    return (
        <ThemeProvider>
            <NavigationContainer linking={linking}>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Test" component={Test}/>
                    <Stack.Screen name="NotFound" component={NotFound}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default registerRootComponent(Index);