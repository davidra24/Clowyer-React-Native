//decide donde inicia el usuario al abrir la app
import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import LogIn from './LogIn';
import {Scene, Router, Stack} from 'react-native-router-flux';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      /*if(Props.log == 0){*/
        <LogIn/>
    /*  }else{
        <UserScreen/>
      }*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e7e6',
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton : {
    margin: 10
  },
  bienvenido:{
     alignItems: 'center', justifyContent: 'center', color: '#000000', marginTop: 5
  },
  backgroundImage:{
    flex: 1,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
