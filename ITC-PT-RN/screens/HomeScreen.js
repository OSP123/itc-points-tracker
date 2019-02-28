import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// context
import { AppConsumer } from '../storage/AppContext';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'ITC Points Tracker',
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
    // const { navigate } = this.props.navigation;
    return (

      <Container style={styles.mainContainer}>
        <Grid>
          <Row>
            {this.state.fontLoaded ? (
              <View>
                <Button
                  onPress={() => { this.props.navigation.navigate("Settings") }}
                >
                  <Text>Settings</Text>
                </Button>
                <Button>
                  <Text>Start</Text>
                </Button>
              </View>
            ) : (console.log(""))}

          </Row>
        </Grid>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },



});