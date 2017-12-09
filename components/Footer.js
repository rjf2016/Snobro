/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


// type Props = {
 
//   navigator: any;
// };

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.onWeatherClick = this.onWeatherClick.bind(this);
    //(this: any).navigateToSettings = this.navigateToSettings.bind(this);
    //(this: any).navigateToLocations = this.navigateToLocations.bind(this);

    //    <TouchableHighlight onPress={this.navigateToSettings} underlayColor='transparent'>
    //        <Icon name='ios-settings-outline' size={32} color='black' />
    //      </TouchableHighlight>


  }
  onWeatherClick() {
     this.props.callbackEdit();
  }
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.left}>
          
         <Image source={require('../images/weatherchannel-logo.png')} style={{opacity: 0.5, flex:1, height:32, width:32, left:10, resizeMode: 'contain'}} />

        </View>

        <View style={styles.right}>
          <TouchableHighlight onPress={this.onWeatherClick} style={{width: 20}} underlayColor='transparent'>
            <Icon name='ios-list' size={35} color='black' />
          </TouchableHighlight>
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
    height: 40,
    paddingLeft: 1,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
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
  }
});

