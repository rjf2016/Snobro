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
      onPress={() => navigation.navigate('Settings', { title: 'Settings', name: 'Jane' })}
      title="Go to the Settings screen"
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
  Home: {
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
  },
  Login: {
    path: 'login/:name',
    screen: LoginScreen,
  },
  WeatherDetail: {
    path: 'weatherdetail/:name',
    screen: WeatherDetailScreen,
  }
});


AppRegistry.registerComponent('SnowBro', () => SimpleStack);
