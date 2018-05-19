/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};
export default class Ajustes extends Component<Props>{
  static navigationOptions = {
    tabBarLabel: 'Ajustes'
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text>Hola mundo ajuses</Text>
      </View>
    )
  }
}
