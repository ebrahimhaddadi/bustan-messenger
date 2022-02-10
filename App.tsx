import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,I18nManager } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Chat from './src/screens/Chat';


const Stack = createNativeStackNavigator();
I18nManager.allowRTL(true);

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Chat" component={Chat}/>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Details" component={Details} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
