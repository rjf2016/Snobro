import React, {Component} from "react";
import { Button, ScrollView, AppRegistry, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import SampleText from './SampleText';

import SettingsStore from './stores/SettingsStore';
import AuthStore from './stores/AuthStore';
import ResortStore from './stores/ResortStore';
import WeatherStore from './stores/WeatherStore';
import NewResortsStore from './stores/NewResortsStore';

import WeatherScreen from './screens/WeatherScreen';
import WeatherEditScreen from './screens/WeatherEditScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SettingsScreen from './screens/SettingsScreen';
import WeatherDetailScreen from './screens/WeatherDetailScreen';

import SignupScreen from './screens/SignupScreen';
import ForgotScreen from './screens/ForgotScreen';

import HomeScreen from './screens/HomeScreen';
import ResortDetailScreen from './screens/ResortDetailScreen';


import {observer, Provider} from 'mobx-react/native'

const settingsstore = new SettingsStore();
const authstore = new AuthStore();

//const p = authstore.signIn('tjf081@gmail.com', 'Mcfly3809');

const weatherstore = new WeatherStore();
const resortstore = new ResortStore();

const newresortsstore = new NewResortsStore();

//always starts on the splashscreen.  Splashscreen navigates accordingly (to login OR weather home)
const splashscreen = ({ navigation, screenProps}) => (
 <WeatherScreen banner="SnoBro" title="SnoBro" screenProps={screenProps} navigation={navigation}  />
);

console.disableYellowBox = true;


const MyStack = StackNavigator(
  {

  Splash: {
    path: 'splash/:name',
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Weather: {
     path: 'weather/:name',
    screen: WeatherScreen,
    navigationOptions: {
      headerBackTitle: null,
      },
    },
    Login: {
      path: 'settings/:name',
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    Settings: {
      path: 'settings/:name',
      screen: SettingsScreen,
    },
    WeatherEdit: {
      path: 'weatheredit/:name',
      screen: WeatherEditScreen,
    },
    ResortDetail: {
      path: 'resortdetail/:name',
      screen: ResortDetailScreen,
    },
    SignUp: {
      path: 'signup/:name',
      screen: SignupScreen,
    },
    Forgot: {
      path: 'forgot/:name',
      screen: ForgotScreen,
    },
    WeatherEdit: {
      path: 'weatheredit/:name',
      screen: WeatherEditScreen,
    }
  })

//@observer
class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {
        settings: settingsstore,
        weather: weatherstore,
        resort: resortstore,
        auth: authstore,
        newresorts: newresortsstore
      },
    }
  }

  render() {
    const {weather} = this.state;
  return (
         <MyStack screenProps={this.state} />
        )
  }
}
export default AppContainer;
