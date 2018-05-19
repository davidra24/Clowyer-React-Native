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
  CheckBox
} from 'react-native';

import styleSheet from '../styles/Styles';

const styles = styleSheet;
const backgroundImg = require('../assets/fondo.png');
function makeClick(){

}
type Props = {};
export default class RegisterScreen extends Component<Props> {
    constructor (){
      super();
      this.state={checkCivil:false}
      this.state={checkPenal:false}
      this.state={checkLaboral:false}
    }
    saveChanges(){

    }
    checkActionCivil(){
      this.setState({
        checkCivil:!this.state.checkCivil
      })}
    checkActionPenal(){
      this.setState({
        checkPenal:!this.state.checkPenal
    })}
    checkActionLaboral(){
      this.setState({
        checkLaboral:!this.state.checkLaboral
    })}
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
                <View style={styles.checkBoxes}>
                  <View>
                    <CheckBox
                      value = {this.state.checkCivil}
                      onChange={()=>this.checkActionCivil()}
                    />
                    <Text style = {styles.bienvenido}>Civil</Text>
                  </View>
                  <View>
                    <CheckBox
                      value = {this.state.checkPenal}
                      onChange={()=>this.checkActionPenal()}
                    />
                    <Text style = {styles.bienvenido}>Penal</Text>
                  </View>
                  <View>
                    <CheckBox
                      value = {this.state.checkLaboral}
                      onChange={()=>this.checkActionLaboral()}
                    />
                    <Text style = {styles.bienvenido}>Laboral</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
    }
}
