import React from 'react';
import { Button, ScrollView, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText';

import WeatherScreen from './components/WeatherScreen';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import SettingsScreen from './components/SettingsScreen';
import WeatherDetailScreen from './components/WeatherDetailScreen';
  
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>   
   <Button
      onPress={() => navigation.navigate('Splash', { title: 'Splash', name: 'SnoBro' })}
      title="Go to the SnoBro Splash screen"
    />
    <Button
      onPress={() => navigation.navigate('Login', { title: 'Login', name: 'Login' })}
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
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'SnoBro',
};


const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Settings: {
    path: 'people/:name',
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
  },
});

//export default SimpleStack;
AppRegistry.registerComponent('SnowBro', () => SimpleStack);
//AppRegistry.registerComponent('SnowBro', () => SnowBro);
