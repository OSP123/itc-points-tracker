import React, { Component } from 'react'

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {

  constructor(props){
    super(props);
    this.state = {
      playerOne: {
        name: ""
      },
      playerTwo: {
        name: ""
      },

    }
  }
  

  setName = (newName) => {
    const playerOne = {...this.state.playerOne};
    playerOne.name = newName
    this.setState({ playerOne }, (
      console.log(this.state)
    ))
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setName: this.setName,
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }


}
