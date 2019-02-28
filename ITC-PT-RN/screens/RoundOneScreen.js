import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class RoundOneScreen extends Component {

  static navigationOptions = {
    title: 'ROUND ONE',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1e8fb5',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 23,
    },
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
