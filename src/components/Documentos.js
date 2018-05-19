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
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};

export default class Documentos extends Component<Props>{
  static navigationOptions = {
    tabBarLabel: 'Documentos'
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text>Hola mundo documentos</Text>
        <TouchableHighlight style={styles.addButton}
          underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
