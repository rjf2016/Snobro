import React, {Component} from 'react';
const styles = require('../styles.js')
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native'


class LoginForm extends Component {


   constructor(props) {
     super(props);

     this.state = {
        auth: this.props.parms.auth,
        username: '',
        password: ''
     }
   }
 onButtonPress = () =>{
     const usrname = this.state.username;
     const pwd = this.state.password;

     Alert.alert('Button has been pressed with: ' + usrname + " | " + pwd);

//  Rick: this next code (below) is when u want to validate against the firebase database
//        note: you would call signup(usrname, pwd) to register a new email/pwd in firebase
//        final note:  all of this handler code should probably be move up to the loginscreen code.
//             i think individual components like this just change state and bubble up events
//             and the parent decides what to do with it
     this.state.auth.signIn(usrname, pwd
    ).then((userData) =>
      {
       console.log("Success");
      }
    ).catch((error) =>
        {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorMessage);
      }
   );


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
               onPress={this.onButtonPress}>
            <Text  style={style.buttonText}>LOGIN</Text>
         </TouchableOpacity>

         <Text style={style.loginTextContainer}>
            <Text style={style.forgotPassword}>Forgot password?</Text>


               <Text style={style.signUp}>SIGN UP</Text>

         </Text>

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
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0)'

   }
})


module.exports = LoginForm;
