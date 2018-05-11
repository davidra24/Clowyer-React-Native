import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import styleSheet from '../styles/Styles';

const styles = styleSheet;
type Props = {};
export default class SplashScreen extends Component<Props> {
    render() {
        const img = this.props.img;
        return (
          <View style = {styles.container} backgroundColor='#edddd4'>
            <Image style = {styles.images} source = {img}/>
            <ActivityIndicator style = {styles.spinner} size="large" color="#772e25" />
          </View>
        );
    }
}
