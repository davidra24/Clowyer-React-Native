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
import styleSheet from '../styles/Styles';

const styles = styleSheet;
function timeOut(){
  setTimeout(function() {
    Actions.home();
  }, 2000);
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
