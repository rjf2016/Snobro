// @flow
import React, {Component} from "react";
import {
  FlatList,
  StatusBar,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback, 
  Image,
  View
} from "react-native";
import { StackNavigator } from 'react-navigation';
import {Icon} from "react-native-elements";
import * as css from "./Styles";

import WeatherList from '../components/WeatherList';
import {observer} from 'mobx-react/native';

import Footer from '../components/Footer';

@observer
export default  class WeatherScreen extends Component {
   _navigation;
   _weatherlist;



   static navigationOptions = props => {
    const { navigation, screenProps } = props;
     const { state, setParams } = navigation;
     const { params } = state;
     const { weatherstore } = screenProps.store.weather;  // const { weatherstore } = props.navigation.state.params.weatherstore;
     
     return {
      //
      //       line below works plus added this line to the render below: <StatusBar hidden />
      //        Note:  the thin statusbar separator was still appearing at the top
      //               so added "bottom: 5000" to remove it (i think it just pushes it out of view)
      
      headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, bottom: 5000, left: 0, right: 0 },
       //title: 'Resorts',
      
       headerLeft: null,
       //backgroundColor: 'transparent',
       }
    };

   navigateWeatherEdit = (WeatherEdit) => {
      const {navigate} = this.props.navigation;
      const {auth} = this.props.screenProps.store.auth;
      const {weather} = this.props.screenProps.store.weather;

    //  console.log(this.props);
      navigate('WeatherEdit', { title: "Edit Resorts", auth: this.state.auth, weatherstore: this.props  });
    }

    navigateResort = (Resort, key) => {
       const {navigate} = this.props.navigation;
       const {auth} = this.props.screenProps.store.auth;
       const {weather} = this.props.screenProps.store.weather;
       const {resort} = this.props.screenProps.store.resort;
     //  console.log(this.props);
       navigate('ResortDetail', { selectedResort: key, title: "Resort Detail" });
     }
       constructor(props) {
        super(props)

         // this.renderRow = this.renderRow.bind(this);
          this.onWeatherEditNavigate = this.onWeatherEditNavigate.bind(this);
          this.onResortNavigate = this.onResortNavigate.bind(this);

          this.state = {
            editing: '',
          }
        }

     onWeatherEditNavigate() {
         this.navigateWeatherEdit('WeatherEdit');
      }

     onResortNavigate(selectedResort) {
         this.navigateResort('Resort', selectedResort);
     }

  componentDidMount() {
       this.setState({weatherlist: this.props.screenProps.store.weather.weatherList});
     }

   

  // sets up the entire screen
  render() {
    const { store } = this.props.screenProps;


    return (
     
      <View style={{height: '100%'}}>
       <StatusBar hidden  />
        <WeatherList store={store}  callbackNavigate={this.onResortNavigate} />

        <Footer callbackEdit={this.onWeatherEditNavigate} />
      </View>


    
    );

  }// end render()

}
