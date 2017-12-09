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
  Button,
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
       title: 'Resorts',
       headerLeft: null,
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

    // getRowColor(currentWeather) {
    //   switch(currentWeather) {
    //     case "ios-snow-outline":
    //       return css.home_screen_list.rowSnow;
    //       break;
    //     case "ios-rainy-outline":
    //       return css.home_screen_list.rowRain;
    //       break;
    //     case "ios-cloudy-outline":
    //       return css.home_screen_list.rowCloud;
    //       break;
    //     case "ios-partly-sunny-outline":
    //         return css.home_screen_list.rowPartlySunny;
    //         break;
    //     default:
    //       return css.home_screen_list.rowSunny;
    //   }
    // }



  // only renders each list item
  // renderRow( {item} ) {


  //   const time = `${item.time}`;
  //   const place = `${item.place}`;
  //   //const temp = css.addDegreesToEnd(item.currentTemp);
  //   const temp = item.currentTemp;
  //   const opentrails = `${item.openTrails}`;
  //   const {iconName, iconFont, iconColor, iconRowColor} = item.icon;

  //   let actualRowComponent =
  //     <View style={css.home_screen_list.row}>
  //       <Image source={require('../images/blueSkyRowBackground.jpg')} style={{resizeMode: 'cover'}}>

  //         <View style={css.home_screen_list.row_cell_timeplace}>
  //           <Text style={css.home_screen_list.row_time}>{time}</Text>
  //           <Text style={css.home_screen_list.row_place}>{place}</Text>
  //         </View>


  //           { this.state.editing == 'edit'
  //           ? <TouchableOpacity style={css.home_screen_list.row_buttonContainer} onPress={this.onLoginClick}><Text style={css.home_screen_list.row_buttonText}>Delete</Text></TouchableOpacity>
  //           : <View><Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
  //           <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text></View>
  //           }

  //       </Image>      
  //     </View>;

  //   let touchableWrapperIos =
  //     <TouchableHighlight
  //       activeOpacity={0.5}
  //       underlayColor={css.colors.transparent_white}
  //       onPress={
  //         () => {
  //           //this.props.navigation.state.params.weatherstore.deleteResort('okemo');
  //           this.setState({editing: 'r'});
  //         }
  //       }
  //     >
  //       {actualRowComponent}
  //     </TouchableHighlight>;

  //   if (require('react-native').Platform.OS === 'ios') {
  //     return touchableWrapperIos;
  //   }
  // };

  // sets up the entire screen
  render() {
    const { store } = this.props.screenProps;


    return (

      <View style={{height: '100%'}}>
        <WeatherList store={store}  callbackNavigate={this.onResortNavigate} />

        <Footer callbackEdit={this.onWeatherEditNavigate} />
      </View>


    
    );

  }// end render()

}
