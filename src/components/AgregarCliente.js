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
  Picker,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';
import DatePicker from 'react-native-datepicker'
import PhoneInput from 'react-native-phone-input'
import Actions from 'react-native-router-flux'
import {agregarClientes} from '../webService/apis'
import {addClientes} from '../webService/apis'

const styles = styleSheet;
type Props = {};
const images = {
  background: require("../assets/fondoCliente.png")
}
export default class AgregarCliente extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      identification: ' ',
      nombre: ' ',
      tipocliente:  'N',
      date: ' ',
      telefono: ' '
   }
  }
  SaveClient(){
    const db = {
      identification : this.state.identification,
      name : this.state.nombre,
      type : this.state.tipocliente,
      date : this.state.date,
      phone : this.state.telefono
    }
    agregarClientes(db);
  }
  render() {
    return (
      <View style = {styles.container}>
        <ImageBackground source={images.background} style={styles.backgroundImage}>
          <View style = {styles.rectangle}>
            <Text style = {styles.bienvenido}>Cedula: </Text>
            <TextInput keyboardType={'number-pad'} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(identification) => {this.setState({identification})}}/>
            <Text style = {styles.bienvenido}>Nombres y apellidos: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(nombre) => {this.setState({nombre})}}/>
            <Text style = {styles.bienvenido}>Tipo de cliente: </Text>
            <Picker
              selectedValue={this.state.tipocliente}
              style={styles.pickerStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({tipocliente: itemValue})}>
              <Picker.Item label="Persona Natural" value="N" />
              <Picker.Item label="Persona Juridica" value="J"/>
            </Picker>
            <Text style = {styles.bienvenido}>Fecha de nacimiento: </Text>
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
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
            <Text style = {styles.bienvenido}>Telefono: </Text>
            <TextInput keyboardType={'phone-pad'} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(telefono) => {this.setState({telefono})}}/>
            {/*<PhoneInput ref='phone'textStyle = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(telefono) => {this.setState({telefono})}}/>*/}
            <TouchableHighlight style={styles.botonGuardar} onPress={()=>this.SaveClient()}><Text>Guardar</Text></TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    )
  }
  static onRight() {
    const c = Actions.refs.save;
    c.SaveClient();
  }
}
