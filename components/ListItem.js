import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text, Image } = ReactNative;



class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.friendlyname}</Text>
          <Text style={styles.liText}>{this.props.item.weather}</Text>
          <Text style={styles.liText}>{this.props.item.temp}</Text> 
          <Image source={{ uri: 'https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/256x256/flurries.png' }} style={{alignSelf: 'flex-end', marginLeft: 'auto', width: 36, height: 36}} />
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;