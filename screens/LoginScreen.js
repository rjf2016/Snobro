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

          navigateSignUp = (SignUp) => {
             const {navigate} = this.props.navigation;
             const {auth} = this.props.navigation.state.params.auth;
             navigate('SignUp', { title: "Sign up", auth: this.state.auth });
           }
           navigateForgot = (Forgot) => {
              const {navigate} = this.props.navigation;
              const {auth} = this.props.navigation.state.params.auth;
              navigate('Forgot', { title: "Forgot Password", auth: this.state.auth });
            }


	  constructor(props) {
		  super(props);

        this.state = {
          auth: props.navigation.state.params.auth,
          username: '',
          pwd: ''
         }

        this.onSignUpNavigate = this.onSignUpNavigate.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onForgotNavigate = this.onForgotNavigate.bind(this);
    	}

   onLoginClick(username, password) {

    console.log("credentials: " + username + " " + password);


    this.state.auth.signIn(username, password
    ).then((userData) =>
      {
       console.log("Success");
       console.log(this.state.auth);
      }
    ).catch((error) =>
        {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorMessage);
         }
      );
   }
   onSignUpNavigate() {
         this.navigateSignUp('SignUp');
      }
   onForgotNavigate() {
         this.navigateForgot('Forgot');
      }

  render() {
    console.log("are we already signed in?");
    console.log(this.state.auth);
    
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
         <View style={style.loginContainer}>
            <Image style={{flex:1, position: 'absolute', width:'100%', height:'100%', resizeMode: 'cover'}} source={require('../images/snowLoginBackground.jpg')} />

            <LoginForm parms={this.props.navigation.state.params} username={this.state.username} pwd={this.state.pwd} props={this.props} callbackForgot={this.onForgotNavigate} callbackLogin={this.onLoginClick} callbackSignUp={this.onSignUpNavigate} />
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
