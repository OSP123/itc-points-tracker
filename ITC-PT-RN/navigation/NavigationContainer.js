import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,

  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;