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
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import styleSheet from '../styles/Styles';
import { Actions } from 'react-native-router-flux';
import ListClient from './ListClient';
import {obtenerClientes} from '../webService/apis';


const styles = styleSheet;
type Props = {};

function addCliente(){
  Actions.agregarCliente();
}
export default class Clientes extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      Clientes : []
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Clientes'
  }
  componentDidMount(){
    obtenerClientes()
      .then((data) => this.setState({
        Clientes: data
      }))
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}>
          <ListClient clientes={this.state.Clientes}/>
        </View>
        <TouchableHighlight style={styles.addButton}
          underlayColor='#ff7043' onPress={()=>addCliente()}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    )

  }
}
