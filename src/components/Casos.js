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
import { Actions } from 'react-native-router-flux';

const styles = styleSheet;
type Props = {};
function addCaso(){
  Actions.agregarCaso();
}
export default class Casos extends Component<Props>{
  static navigationOptions = {
    tabBarLabel: 'Casos'
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text>Hola mundo casos</Text>
        <TouchableHighlight style={styles.addButton}
          underlayColor='#ff7043' onPress={()=>{addCaso()}}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
