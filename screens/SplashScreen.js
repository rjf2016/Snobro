
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

//import WeatherList from '../components/WeatherList';

import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  ListView
} from 'react-native';


export default class SplashScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
     //title: `${navigation.state.params.title}`,
    }
  };

      navigateWeather = (WeatherScreen) => {
             const {navigate} = this.props.navigation;
             navigate('Weather', { title: "", passProps: this.props });
           }
      navigateLogin = (LoginScreen) => {
             const {navigate} = this.props.navigation;
             navigate('Login', { title: "Login", passProps: this.props });
           }



constructor(props){
   super(props);
  
  }

componentDidMount() {
    const { auth } = this.props.screenProps.store;

    if(!auth.authUser){
          setTimeout(() => {
          this.navigateLogin('LoginScreen');
        }, 1500)
    }
    else{
        setTimeout(() => {
              this.navigateWeather('WeatherScreen');
            }, 1500)     
    }

    
  }

  render() {
    
    return (
      <View style={{flex:1}}>
        <Image source={require('../images/snobroSplash.png')} style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
      </View>
    )
  }
}
