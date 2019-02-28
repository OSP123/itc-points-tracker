import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

// navigation
import NavigationContainer from './navigation/NavigationContainer'

// context
import AppProvider from './storage/AppContext';

export default class App extends Component {

  render() {
    return (

        <AppProvider>
          <NavigationContainer />
        </AppProvider>
        
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
