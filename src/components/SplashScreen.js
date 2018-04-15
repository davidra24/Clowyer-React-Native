import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

type Props = {};
export default class SplashScreen extends Component<Props> {
    render() {
        const img = this.props.img;
        return (
          <View style = {styles.container}>
            <Image style = {styles.images} source = {img}/>
            <ActivityIndicator style = {styles.spinner} size="large" color="#1c6e8c" />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0ccd0',
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner:{
    marginTop: 15
  }
});
