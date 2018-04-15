/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from './SplashScreen';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

function timeOut(){
  setTimeout(function() {
    Actions.home();
  }, 5000);
}

type Props = {};
const img = require("../assets/icon.png");
export default class Splash extends Component<Props>{
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen img = {img}/>{timeOut()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});
