import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  AlertIOS,
  Image,
  AppRegistry
} from 'react-native';

import {firebaseApp} from './base';
//import firebase from 'firebase';

// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBTKJZcHqJWllerYuEY_P0N4vPuwKzpHDI",
  //   authDomain: "snowvt-29682.firebaseapp.com",
  //   databaseURL: "https://snowvt-29682.firebaseio.com",
  //   projectId: "snowvt-29682",
  //   storageBucket: "snowvt-29682.appspot.com",
  //   messagingSenderId: "57138291605"
  // };

//const firebaseApp = firebase.initializeApp(config);


class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`,
    }
  };
/*
		navigate = (WeatherDetail) => {
              const {navigate} = this.props.navigation;
              navigate('WeatherDetail', { title: selectedResort });
					}
*/
	  constructor(props) {
		  super(props);
		  
		}

		componentDidMount() {
		 // this.listenForResortItems(this.resortsRef);
		}

		


getRef() {
    return firebaseApp.database().ref();
  }


  render() {
    return (
      <Text>Made it to the Login Screen</Text>
    );
  }

   

}


export default LoginScreen;
