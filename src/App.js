/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import LogIn from './components/LogIn';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar/>
          <Scene key="login" component={LogIn} title="LogIn"/>
          <Scene key="home" component={Home} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfcff',
  }
});
