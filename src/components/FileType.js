//decide donde inicia el usuario al abrir la app
import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};
export default class Home extends Component<Props> {
  //this.Props.isLoggedIn;
  constructor(){
    super();

  }

  render() {

    return (
      <View style = {styles.container}>

      </View>
    );
  }
}
