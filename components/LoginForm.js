import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native'

const styles = require('../styles.js')

class LoginForm extends Component {

   constructor(props) {
     super(props);

     this.state = {
        auth: this.props.parms.auth,
        username: '',
        password: ''
     }
     this.onLoginClick = this.onLoginClick.bind(this);
   }


   onLoginClick() {
      this.props.callbackLogin(this.state.username, this.state.password);
   }

   componentDidMount() {

       this.setState({username: 'rickfahey81@gmail.com', password: 'Noxerdod1'})
   }


  render() {

    return (

      <View style={style.container}>
            <TextInput style = {style.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               returnKeyType="next"
               keyboardType='email-address'
               placeholder='Email'
               placeholderTextColor='gray'
               onChangeText={(text) => this.setState({username: text})}
            />

         <TextInput style = {style.input}
               returnKeyType="go"
               ref={(input)=> this.passwordInput = input}
               placeholder='Password'
               placeholderTextColor='gray'
               onChangeText={(text) => this.setState({password: text})}
               secureTextEntry/>

         <TouchableOpacity style={style.buttonContainer}
               onPress={this.onLoginClick}>
            <Text style={style.buttonText}>Login</Text>
         </TouchableOpacity>

         <View style={style.loginTextContainer}>
               <Text style={style.forgotPassword} onPress={this.props.callbackForgot}>Forgot password?</Text>
               <Text style={style.signUp} onPress={this.props.callbackSignUp}>Sign up</Text>
         </View>
      </View>
      );
   }
}


const style = StyleSheet.create({
   container: {
      padding: 20,
   },
   input:{
      height: 40,
      backgroundColor: 'white',
      marginBottom: 10,
      padding: 10,
      color: 'black',
      marginRight: 50,
      marginLeft: 50
   },
   buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15,
      marginRight: 50,
      marginLeft: 50
   },
   buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
   },
   loginButton:{
      backgroundColor:  '#2980b6',
      color: '#fff'
   },
   loginTextContainer:{
      marginTop: 10,
      marginRight: 50,
      marginLeft: 50,
      backgroundColor: 'rgba(0,0,0,0)',
      flexDirection: 'row',
      paddingRight: 5,
      paddingLeft: 5
   },
   signUp:{
      flex: 1,
      fontWeight: '600',
      textAlign: 'right',
      color: 'white',
      fontSize: 15,
   },
   forgotPassword:{
      flex: 1,
      alignSelf: 'flex-start',
      color: 'white',
      fontSize: 14,
      letterSpacing: -.5
   }

})


module.exports = LoginForm;
