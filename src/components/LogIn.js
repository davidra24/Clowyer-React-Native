import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
type Props = {};
export default class LogIn extends Component<Props> {
    render() {
        return (
          <View style = {styles.container}>
            <Text>Hola LogIn</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e7e6',
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
