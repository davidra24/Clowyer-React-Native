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
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Clientes from './Clientes';
import Casos from './Casos';
import Documentos from './Documentos';
import Ajustes from './Ajustes';
import styleSheet from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = styleSheet;
const backgroundImg = require('../assets/fondo.png');
type Props = {};
var mainScreenNavigator = TabNavigator(
  {
    Casos: {screen: Casos},
    Clientes: {screen: Clientes},
    Documentos: {screen: Documentos},
    Ajustes: {screen: Ajustes}
  },
  {
    navigationOptions : ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Casos'){
          iconName = 'briefcase';
        }else if(routeName === 'Clientes'){
          iconName = 'clipboard';
        }else if(routeName === 'Documentos'){
          iconName = 'book';
        }else{
          iconName = 'cogs';
        }
        return <Icon name={iconName} size={30} color={tintColor} />
      },
    }),
    tabBarOptions:{
      title: 'Tab navigator',
      activeTintColor: '#772e25', //'tomato',
      inactiveTintColor: 'gray'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true
  }
);

export default mainScreenNavigator;
