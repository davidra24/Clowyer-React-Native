//Pantalla de inicio cuando el usuario no ha loggueado en la aplicación
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
export default class RegisterScreen extends Component<Props> {
    action(){

    }
    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
              <View style = {styles.rectangle}>
                <Text style = {styles.bienvenido}>Cédula: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Nombres y apellidos: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Teléfono: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Usuario: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Contraseña: </Text>
                <TextInput secureTextEntry={true}   style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Verifique su contraseña: </Text>
                <TextInput secureTextEntry={true}   style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>e-Mail: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                
              </View>
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
     alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginTop: 5
  },
  backgroundImage:{
    flex: 1,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangle:{
    backgroundColor: '#19727850',
    padding: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
