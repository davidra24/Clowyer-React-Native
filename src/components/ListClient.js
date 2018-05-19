/*<>*/
import React, { Component } from 'react';
import {
View,
Platform,
Text,
FlatList,
TouchableHighlight
} from 'react-native';
import styleSheet from '../styles/Styles';
import Swipeout from 'react-native-swipeout';

const styles = styleSheet;
type Props = {};
export default class ListClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      clientes: []
    }
  }
  componentWillMount() {
    const { content } = this.props;
    this.setState({clientes: content});
  }
  componentWillReceiveProps(newProps){
    this.setState({
      clientes :  this.props.clientes
    })
  }
  render() {

      return (
        <View>
          <FlatList data = {this.state.clientes}
            keyExtractor = {(x, i) => i}
            renderItem = {({ item }) =>
              <Text style={styles.itemConsult}>
                {item.name}
              </Text>
            }
          />
        </View>
    );
  }
}
