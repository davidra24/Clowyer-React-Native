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
  Image,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Clientes from './Clientes';
import Casos from './Casos';
import Documentos from './Documentos';
import styleSheet from '../styles/Styles';
import icons from './icons'

const styles = styleSheet;
const icon = icons;
const backgroundImg = require('../assets/fondo.png');
type Props = {};
var mainScreenNavigator = TabNavigator(
  {
    Casos: {screen: Casos},
    Clientes: {screen: Clientes},
    Documentos: {screen: Documentos}
  },{
  tabBarPosition: 'bottom',
  swipeEnabled: true
});
mainScreenNavigator.navigationOption = {
  title: 'Tab navigator',
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
};

export default mainScreenNavigator;
/*
export default class UserScreen extends Component<Props> {

  constructor (props){
    super(props);
  }
    render() {
        return (

        );
    }
}
*/
