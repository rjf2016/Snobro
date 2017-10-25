/* @flow */
import React from 'react';
import { Button, ScrollView, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText';

import AuthStore from './stores/AuthStore';
import WeatherScreen from './screens/WeatherScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SettingsScreen from './screens/SettingsScreen';
import WeatherDetailScreen from './screens/WeatherDetailScreen';

import SignupScreen from './screens/SignupScreen';
import ForgotScreen from './screens/ForgotScreen';

import HomeScreen from './screens/HomeScreen';
import ResortDetailScreen from './screens/ResortDetailScreen';


const authstore = new AuthStore();

const MyNavScreen = ({ navigation, banner }) => (

 <ScrollView>
   <Button
      onPress={() => navigation.navigate('Splash', { title: 'Splash', name: 'SnoBro' })}
      title="Go to the SnoBro Splash screen"
    />
    <Button
      onPress={() => navigation.navigate('Login', { title: 'Login', name: 'Login', auth: authstore } )}
      title="Go to the Login Screen"
    />
    <Button
      onPress={() => navigation.navigate('Weather', { title: 'Weather', name: 'Jay Peak' })}
      title="Go to a Weather screen"
    />
    <Button
      onPress={() => navigation.navigate('Home', { title: 'SnoBro', name: 'Home screen' })}
      title="Go to the new Home screen"
    />
    <Button
      onPress={() => navigation.navigate('Settings', { title: 'Settings', name: 'Jane' })}
      title="Go to the settings screen"
    />


    <Button onPress={() => navigation.goBack(null)} title="Go back" />
</ScrollView>



);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} auth={AuthStore} />
);

MyHomeScreen.navigationOptions = {
  title: 'SnoBro',
};
MyHomeScreen.authFactor = {
  auth: 'SnoBro',
};


const SimpleStack = StackNavigator(
   {
  MyHome: {
    screen: MyHomeScreen,
  },
  Settings: {
    path: 'settings/:name',
    screen: SettingsScreen,
  },
  Splash: {
    path: 'splash/:name',
    screen: SplashScreen,
  },
  Weather: {
    path: 'weather/:name',
    screen: WeatherScreen,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  Login: {
    path: 'login/:name',
    screen: LoginScreen,
  },
  Home: {
    path: 'homescreen/:name',
    screen: HomeScreen,
  },
  ResortDetail: {
    path: 'resortdetail/:name',
    screen: ResortDetailScreen,
  },
  WeatherDetail: {
    path: 'weatherdetail/:name',
    screen: WeatherDetailScreen,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  SignUp: {
    path: 'signup/:name',
    screen: SignupScreen,
   },
  Forgot: {
     path: 'forgot/:name',
     screen: ForgotScreen,
   }
});


AppRegistry.registerComponent('SnowBro', () => SimpleStack);
