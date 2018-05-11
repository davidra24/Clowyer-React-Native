//decide donde inicia el usuario al abrir la app
import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import LogIn from './LogIn';
import UserScreen from './UserScreen';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};
export default class Home extends Component<Props> {
  //this.Props.isLoggedIn;
  constructor(){
    super();

  }
  isLogged(logged){
    if (logged) {
      return <UserScreen />;
    }else{
      return <LogIn />;
    }
  }
  render() {
    const isLoggedIn = true;
    return (
      <View style = {styles.bigContainer}>
        {this.isLogged(isLoggedIn)}
      </View>
    );
  }
}
