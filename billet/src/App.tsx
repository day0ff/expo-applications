import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native'
import { signal } from '@preact/signals-react';

import Star from '../assets/star-fill.svg';
import {AppStyles} from "./App.styles";

const count = signal(0);

function App() {
  return (
    <View style={AppStyles.container}>
      <Button title="Incriment" onPress={() => count.value++} />
      <Text>Count = {count}</Text>
      <Star width={50} height={50} color="yellow" />
      <StatusBar style="auto" />
    </View>
  );
}



export default registerRootComponent(App);
