//Pantalla de Inicia cuando ya se ha loggueado el usuario
import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';

const backgroundImg = require('../assets/fondo.png');
type Props = {};
export default class Home extends Component<Props> {
    action(){

    }
    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
                
            </ImageBackground>
          </View>
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
