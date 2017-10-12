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

constructor(props){
   super(props);

   console.log("Gotcha");
}

componentDidMount() {
   // setTimout(() => {
   //    this.props.navigation.replace({title: "Login", passProps: this.props})
   // }, 1000);
}


  render() {
  	const { state, navigate } = this.props.navigation;

    return (
       <Image source={require('../images/snobroSplash.png')} style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
    );
  }
}

export default SplashScreen;
