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
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};

export default class Documentos extends Component<Props>{
  static navigationOption = {
    tabBarLabel: 'Documentos'
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text>Hola mundo documentos</Text>
      </View>
    )
  }
}
