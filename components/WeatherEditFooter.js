/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
import * as css from "../screens/Styles";
import Icon from 'react-native-vector-icons/Ionicons';


class WeatherEditFooter extends Component {
  
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
   }

  //calls the parent function is WeatherEditScreen that setState="mode: add" (causing WeatherEditList to change to add mode)
  onAddClick() {
     this.props.callBackAdd();
  }
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.center}>
            <Button onPress = { () => this.onAddClick() } style={styles.buttonStyle} title='Add More Resorts'  />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 43,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    color: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4'
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  buttonStyle: {
      backgroundColor: 'green',
      color: 'white',
      fontSize: 36
  }
});




module.exports = WeatherEditFooter;
