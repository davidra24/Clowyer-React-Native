import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

type Props = {};
const images = {
  logo: require("../assets/login.png"),
  backgroundLogIn: require("../assets/fondo.png")
}

function goUserScreen(){
  Actions.userScreen();
}
function goRegisterScreen() {
  Actions.registerScreen();
}
export default class LogIn extends Component<Props> {
  render(){
      return (
        <View style = {styles.container}>
          <ImageBackground source={images.backgroundLogIn} style={styles.backgroundImage}>
            <View style = {styles.rectangle}>
              <Image style = {styles.logo} source={images.logo}></Image>
                <Text style = {styles.bienvenido}>Usuario: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <Text style = {styles.bienvenido}>Contraseña: </Text>
                <TextInput secureTextEntry={true} style = {{width: '100%',height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white'/>
                <View style = {styles.boton}>
                  <Button style = {styles.boton}
                    onPress={goUserScreen}
                    title="Iniciar sesión"
                    color="#c44536"
                  />
                </View>
                <View style = {styles.boton}>
                  <Button
                    onPress={goRegisterScreen}
                    title="Registrarse"
                    color="#c44536"
                  />
                </View>
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
  boton : {
    margin: 10,
    width: '100%',
    height: '8%'
  },
  bienvenido:{
     alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginTop: 5
  },
  rectangle:{
    backgroundColor: '#19727850',
    padding: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    width: '40%',
    height: '40%',
  },
  backgroundImage:{
    flex: 1,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
