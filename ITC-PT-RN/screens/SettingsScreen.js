import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';

import { AppConsumer } from '../storage/AppContext'

export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      strategy1: ""
    }
  }

  static navigationOptions = {
    title: 'Settings',
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
      <AppConsumer>
        {(context) => (
          <Container>

            <Content>
              <Form>
                <Item floatingLabel>
                  <Input
                  placeholder="Name"
                  value={this.state.name}
                  onChangeText={(text) => {
                    this.setState({name: text})
                  }}  
                  />
                </Item>
                <Item last>
                  <Input placeholder="strategy" />
                </Item>
                <Button
                  onPress={() => {
                    context.setName(this.state.name)
                  }}
                ><Text>Submit</Text></Button>
              </Form>
              {context.state.playerOne.name ? (
                <Text>{context.state.playerOne.name}</Text>
              ) : (console.log(""))}
              
            </Content>
          </Container>
        )}
      </AppConsumer>
    )
  }
}
