//Pantalla de inicio cuando el usuario no ha loggueado en la aplicación
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};
export default class RegisterScreen extends Component<Props>{
    render() {
        return (
        <ToolbarAndroid
            actions={[{title: 'Settings', show: 'always'}]}
            onActionSelected={this.onActionSelected} />
        );
    }
}

onActionSelected: function(position) {
  if (position === 0) { // index of 'Settings'
    showSettings();
  }
}
