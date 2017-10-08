import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


class SplashScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`,
    }
  };

  render() {
  	const { state, navigate } = this.props.navigation;

    return (
       <Image source={require('../images/snobroSplash.png')} style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
    );
  }
}

export default SplashScreen;

