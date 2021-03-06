/* @flow */
import React from 'react';
import { Button, ScrollView, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText';

import AuthStore from './stores/AuthStore';
import WeatherStore from './stores/WeatherStore';

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


const authstore = new AuthStore();
const weatherstore = new WeatherStore();


const MyNavScreen = ({ navigation, banner }) => (

 <ScrollView>
   <Button
      onPress={() => navigation.navigate('Splash', { title: 'Splash', name: 'SnoBro' })}
      title="Go to the SnoBro Splash screen"
    />
    <Button
      onPress={() => navigation.navigate('Login', { title: 'Login', name: 'Login', auth: authstore, weatherstore: weatherstore } )}
      title="Go to the Login Screen"
    />
    {<Button
      onPress={() => navigation.navigate('Weather', { title: 'Weather', name: 'Jay Peak', auth: authstore, weatherstore: weatherstore })}
      title="Go to a Weather screen"
    />}
    <Button
      onPress={() => navigation.navigate('Home', { title: 'SnoBro', name: 'Home screen', auth: authstore, weatherstore: weatherstore })}
      title="Go to the new Weather home screen"
    />
    <Button
      onPress={() => navigation.navigate('Settings', { title: 'Settings', name: 'Jane' })}
      title="Go to the settings screen"
    />


    <Button onPress={() => navigation.goBack(null)} title="Go back" />
</ScrollView>



);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
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
    screenProps: {tintColor: 'blue'},
    navigationOptions: {
      headerBackTitle: null,
    },

              passProps: {
                stores: this.state.store,
                toggleDrawer: this.toggleDrawer.bind(this),
                theme: this.state.theme
              }

  },
  WeatherEdit: {
    path: 'weatheredit/:name',
    screen: WeatherEditScreen,
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
