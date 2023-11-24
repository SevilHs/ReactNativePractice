/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Courses from './src/screens/Courses';
import Counter from './src/screens/Counter';
import Boxes from './src/screens/Boxes';
import ChangeColor from './src/screens/ChangeColor';
import PasswordCompliance from './src/screens/PasswordCompliance';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{contentStyle: styles.sectionContainer}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Boxes" component={Boxes} />
        <Stack.Screen name="ChangeColor" component={ChangeColor} />
        <Stack.Screen
          name="PasswordCompliance"
          component={PasswordCompliance}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
    backgroundColor:"#fafafa"
  },
});

export default App;
