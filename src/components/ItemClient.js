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

const styles = styleSheet;
type Props = {};

export default class Clientes extends Component<Props>{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {styles.containerList}>
        <View>
          <Text style = {styles.tipoCliente}>{this.props.tipoCliente}</Text>
        </View>
        <View style = {styles.container}>
          <Text style = {styles.nombreCliente}>{this.props.nombreCliente}</Text>
          <Text style = {styles.telefonoCliente}>{this.props.telefonoCliente}</Text>
        </View>
      </View>
    )

  }
}
