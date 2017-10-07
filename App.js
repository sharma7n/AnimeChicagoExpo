import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Font } from 'expo';

import SignIn from './scenes/SignIn/index';
import Home from './scenes/Home/index';
import Sponsors from './scenes/Sponsors/index';
import AdminEvent from './scenes/AdminEvent/index';

//import Styles from './config/styles';

const Router = TabNavigator(
  {
    Home: { screen: Home },
    SignIn: { screen: SignIn },
    Sponsors: { screen: Sponsors },
    AdminEvent: { screen: AdminEvent }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    }
  }
);

export default class App extends Component {
  state = { fontLoaded: false }
  
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf')
    });
    
    this.setState({ fontLoaded: true });
  }
  
  render() {
    return (
      this.state.fontLoaded ? <Router /> : null
    );
  }
}