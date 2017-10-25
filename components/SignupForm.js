import React, {Component} from 'react';
const styles = require('../styles.js')
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native'


class SignupForm extends Component {

   constructor(props) {
     super(props);

     this.state = {
        auth: this.props.parms.auth,
        username: '',
        password: ''
     }
     this.onSignUpClick = this.onSignUpClick.bind(this);

   }


   onSignUpClick() {
      console.log("Well? username: " + this.state.username);
      this.props.callbackSignUp(this.state.username, this.state.password);
   }
   componentDidMount() {
      //this.state.auth.test("made it to the form!!!");
   }
  render() {
    //console.log(this.state);
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
               onPress={this.onSignUpClick}>
            <Text  style={style.buttonText}>Sign-up</Text>
         </TouchableOpacity>



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
      fontSize: 15,
      letterSpacing: -.5
   }

})


module.exports = SignupForm;
