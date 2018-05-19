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
  TextInput,
  Picker,
  TouchableHighlight,
  ImageBackground,
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';
import DatePicker from 'react-native-datepicker'
const backgroundImg = require('../assets/fondo.png');
const styles = styleSheet;
type Props = {};
const images = {
  background: require("../assets/fondoCliente.png")
}
export default class AgregarCaso extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      numberCase: '',
      dateStart: '',
      dateFinish: '',
      courtName: ''
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <ImageBackground source={images.background} style={styles.backgroundImage}>
          <View style = {styles.rectangle}>
            <Text style = {styles.bienvenido}>Numero de caso: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(numberCase) => {this.setState({numberCase})}}/>
            <Text style = {styles.bienvenido}>Fecha de inicio: </Text>
            <DatePicker
                    style={{width: '100%'}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1900-01-01"
                    maxDate="2999-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      color:'#FFFFFF',
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(dateStart) => {this.setState({dateStart: date})}}
                  />
                  <Text style = {styles.bienvenido}>Fecha de fin: </Text>
                  <DatePicker
                          style={{width: '100%'}}
                          date={this.state.date}
                          mode="date"
                          placeholder="select date"
                          format="YYYY-MM-DD"
                          minDate="1900-01-01"
                          maxDate="2999-12-31"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                            color:'#FFFFFF',
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                            dateInput: {
                              marginLeft: 36
                            }
                          }}
                          onDateChange={(dateFinish) => {this.setState({dateFinish: date})}}
                        />
            <Text style = {styles.bienvenido}>Nombre de la corte: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(courtName) => {this.setState({courtName})}}/>
            <TouchableHighlight style={styles.botonGuardar} onPress={()=>SaveClient()}><Text>Guardar</Text></TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
