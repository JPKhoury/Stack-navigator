import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';
import Help from './screens/Help';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const NavStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen name="" component={Homescreen} />
        <NavStack.Screen name="Help" component={Help} />
        <NavStack.Screen name="Back" component={Aboutscreen} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
