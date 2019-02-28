import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Form, Item, Input, Button, Picker } from 'native-base';

import { AppConsumer } from '../storage/AppContext'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      },
      playerTwo: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      }
    }
  }

  onValueChangeP1FirstSecondary(value) {
    const playerOne = {...this.state.playerOne}
    playerOne.firstSecondary = value
    this.setState({
      playerOne
    }, (console.log(playerOne)))
  }

  onValueChangeP1SecondSecondary(value) {
    const playerOne = {...this.state.playerOne}
    playerOne.secondSecondary = value
    this.setState({
      playerOne
    })
  }

  onValueChangeP1ThirdSecondary(value) {
    const playerOne = {...this.state.playerOne}
    playerOne.thirdSecondary = value
    this.setState({
      playerOne
    })
  }

  onValueChangeP2FirstSecondary(value) {
    const playerTwo = {...this.state.playerTwo}
    playerTwo.firstSecondary = value
    this.setState({
      playerTwo
    })
  }

  onValueChangeP2SecondSecondary(value) {
    const playerTwo = {...this.state.playerTwo}
    playerTwo.secondSecondary = value
    this.setState({
      playerTwo
    })
  }

  onValueChangeP2ThirdSecondary(value) {
    const playerTwo = {...this.state.playerTwo}
    playerTwo.thirdSecondary = value
    this.setState({
      playerTwo
    })
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
                    placeholder="Player One Name"
                    value={this.state.playerOne.name}
                    onChangeText={(text) => {
                      const playerOne = {...this.state.playerOne}
                      playerOne.name = text
                      this.setState({ playerOne })
                    }}
                  />
                </Item>



                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="First Secondary"
                    selectedValue={this.state.playerOne.firstSecondary}
                    onValueChange={this.onValueChangeP1FirstSecondary.bind(this)}
                  >
                    <Picker.Item label="Select First Secondary" value="" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Second Secondary"
                    selectedValue={this.state.playerOne.secondSecondary}
                    onValueChange={this.onValueChangeP1SecondSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Second Secondary" value="" />
                    <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Third Secondary"
                    selectedValue={this.state.playerOne.thirdSecondary}
                    onValueChange={this.onValueChangeP1ThirdSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Third Secondary" value="" />
                    <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>


                <Item floatingLabel>
                  <Input
                    placeholder="Player Two Name"
                    value={this.state.playerTwo.name}
                    onChangeText={(text) => {
                      const playerTwo = {...this.state.playerTwo};
                      playerTwo.name = text
                      this.setState({ playerTwo })
                    }}
                  />
                </Item>


                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="First Secondary"
                    selectedValue={this.state.playerTwo.firstSecondary}
                    onValueChange={this.onValueChangeP2FirstSecondary.bind(this)}
                  >
                    <Picker.Item label="Select First Secondary" value="" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Second Secondary"
                    selectedValue={this.state.playerTwo.secondSecondary}
                    onValueChange={this.onValueChangeP2SecondSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Second Secondary" value="" />
                    <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Third Secondary"
                    selectedValue={this.state.playerTwo.thirdSecondary}
                    onValueChange={this.onValueChangeP2ThirdSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Third Secondary" value="" />
                    <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
                    <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
                    <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
                    <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
                    <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
                    <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
                    <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
                    <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
                    <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
                    <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
                    <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

                  </Picker>
                </Item>




                <Button
                  onPress={() => {
                    context.setSecondaries(this.state)
                    console.log(this.state)
                    this.props.navigation.navigate("RoundOne")
                  }}
                ><Text>Next</Text></Button>









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
