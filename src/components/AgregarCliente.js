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
//import {agregarClientes} from '../webService/apis'
const styles = styleSheet;
type Props = {};
const images = {
  background: require("../assets/fondoCliente.png")
}
async function SaveClient(){
  const db = {
    id : this.state.cedula,
    name : this.state.nombre,
    type : this.state.tipoCliente,
    date : this.state.date,
    phone : this.state.telefono
  }
  apiPost.postCli(db);
}
export default class AgregarCliente extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      cedula: ' ',
      nombre: ' ',
      tipocliente:  ' ',
      date: ' ',
      telefono: ' '
   }
   //this.SaveClient = this.SaveClient.bind(this);
  }
  /*componentDidMount(){
    Actions.refresh({
      right: () => (<Text onPress = {this.SaveClient}>{'Guardar'}</Text>)
    })
  }*/
  render() {

    return (
      <View style = {styles.container}>
        <ImageBackground source={images.background} style={styles.backgroundImage}>
          <View style = {styles.rectangle}>
            <Text style = {styles.bienvenido}>Cedula: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(cedula) => {this.setState({cedula})}}/>
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
            <PhoneInput ref='phone'textStyle = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(telefono) => {this.setState({telefono})}}/>
            <TouchableHighlight style={styles.botonGuardar} onPress={()=>SaveClient()}><Text>Guardar</Text></TouchableHighlight>
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
