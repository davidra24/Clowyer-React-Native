/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import LogIn from './components/LogIn';
import UserScreen from './components/UserScreen';
import RegisterScreen from './components/RegisterScreen';
import AgregarCaso from './components/AgregarCaso';
import AgregarCliente from './components/AgregarCliente';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar/>
          <Scene key="home" component={Home} hideNavBar/>
          <Scene key="logIn" component={LogIn} hideNavBar/>
          <Scene key="userScreen" component={UserScreen}/>
          <Scene key="registerScreen" component={RegisterScreen} rightTitle={'Guardar  '}/>
          <Scene key="agregarCaso" component={AgregarCaso} onRight={()=>{}} rightTitle={'Guardar  '}/>
          <Scene key="agregarCliente" component={AgregarCliente} onRight={()=>{}} rightTitle={'Guardar  '}/>
        </Stack>
      </Router>
    )
  }
}
