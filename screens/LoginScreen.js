/* @flow */
import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  ListView,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import {firebaseApp} from '../components/base';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`
    }
  };
	  constructor(props) {
		  super(props);
        //console.log(props.navigation.state.params.auth);
		}

  render() {
     
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
         <View style={style.loginContainer}>
            <Image style={{flex:1, position: 'absolute', width:'100%', height:'100%', resizeMode: 'cover'}} source={require('../images/snowLoginBackground.jpg')} />

            <LoginForm parms={this.props.navigation.state.params} />
         </View>
      </KeyboardAvoidingView>

    );
  }
}
const style = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#2c3e50'
  },
  loginContainer: {

    flexGrow: 1,
    justifyContent: 'center'
  }
})

export default LoginScreen;
