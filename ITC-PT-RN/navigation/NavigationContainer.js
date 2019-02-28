import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RoundOneScreen from '../screens/RoundOneScreen'


const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    RoundOne: RoundOneScreen

  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;