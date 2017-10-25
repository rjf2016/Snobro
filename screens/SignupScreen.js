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
import SignupForm from '../components/SignupForm';

class SignupScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`
    }
  };

	  constructor(props) {
		  super(props);


        this.state = {
          auth: this.props.navigation.state.params.auth,
          username: '',
          pwd: ''
         }
         this.onSignUpClick = this.onSignUpClick.bind(this);

        //console.log(this.props)
     }

     //this function is called from the SignupForm once person presses sign up with
     //their email and password.
      onSignUpClick(username, password) {
         //1. Register with firebase
         //2. Send confirmation

         this.state.auth.signUp(username, password).then((userData) =>
           {
            console.log("Success");
            const { navigation } = this.props;
            navigation.goBack();  //goback to the LoginScreen to type in the new email and pwd
           }
         ).catch((error) =>
             {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
              }
           );


         }

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
         <View style={style.loginContainer}>
            <Image style={{flex:1, position: 'absolute', width:'100%', height:'100%', resizeMode: 'cover'}} source={require('../images/snowLoginBackground.jpg')} />

            <SignupForm parms={this.props.navigation.state.params} callbackSignUp={this.onSignUpClick} />
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

export default SignupScreen;
