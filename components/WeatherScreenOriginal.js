import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView
} from 'react-native';


class WeatherScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`,
    }
  };

  render() {
  	const { state, navigate } = this.props.navigation;

    return (
      <Text>{state.params.title} Screen goes Here!</Text>
    );
  }
}

export default WeatherScreen;

