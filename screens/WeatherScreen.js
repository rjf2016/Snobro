// @flow

import React, {Component} from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  View
} from "react-native";
import { StackNavigator } from 'react-navigation';
import {Icon} from "react-native-elements";
import * as css from "./Styles";


//import {WeatherStore} from "../stores/WeatherStore";

import Footer from '../components/Footer';

 class WeatherScreen extends Component {

   // reference to navigator
   _navigation;

static navigationOptions = props => {

     const { navigation } = props;
     const { state, setParams } = navigation;
     const { params } = state;
     const {weatherstore} = props.navigation.state.params.weatherstore;

     return {
       title: `${navigation.state.params.title}`,
       headerRight: (
          <Button
          title={params.editing === 'edit' ? 'Done' : 'Edit'}
          onPress={() => state.params.handleEdit() }
        />
       ),
     }
   };

  handleEdit(){
    if(this.state.editing == ''){
          this.setState({  editing: 'edit' });
          this.props.navigation.setParams({
                  editing: 'edit',
              });
              return;
    }

    if(this.state.editing == 'edit'){
          this.setState({  editing: 'done' });
          this.props.navigation.setParams({
                  editing: 'done',
              });
              return;
    }

    if(this.state.editing == 'done'){
          this.setState({  editing: 'edit' });
          this.props.navigation.setParams({
                  editing: 'edit',
              });
    }
  }

   constructor(props) {
     super(props);

     this.state = {
       editing: '',
       weatherlist: props.navigation.state.params.weatherstore.weatherList,
       weeklyforecast: props.navigation.state.params.weatherstore.weeklyForecast
     }
      this.renderRow = this.renderRow.bind(this);

    }

    componentDidMount() {

      this.props.navigation.setParams({
           editing: '',
            handleEdit: this.handleEdit.bind(this),
        });

    }

    getRowColor(currentWeather) {
      switch(currentWeather) {
        case "ios-snow-outline":
          return css.home_screen_list.rowSnow;
          break;
        case "ios-rainy-outline":
          return css.home_screen_list.rowRain;
          break;
        case "ios-cloudy-outline":
          return css.home_screen_list.rowCloud;
          break;
        case "ios-partly-sunny-outline":
            return css.home_screen_list.rowPartlySunny;
            break;
        default:
          return css.home_screen_list.rowSunny;
      }
    }

  // only renders each list item
  renderRow({item}) {

    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = css.addDegreesToEnd(item.currentTemp);
    const opentrails = `${item.openTrails}`;
    const {iconName, iconFont, iconColor, iconRowColor} = item.icon;

    let actualRowComponent =
    // <View style={css.home_screen_list.row}>

      <View style={[css.home_screen_list.row, this.getRowColor(iconName)]}>

        <View style={css.home_screen_list.row_cell_timeplace}>
          <Text style={css.home_screen_list.row_time}>{time}</Text>
          <Text style={css.home_screen_list.row_place}>{place}</Text>
        </View>


          { this.state.editing == 'edit'
          ? <TouchableOpacity style={css.home_screen_list.row_buttonContainer} onPress={this.onLoginClick}><Text style={css.home_screen_list.row_buttonText}>Delete</Text></TouchableOpacity>
          : <View><Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
          <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text></View>
          }

      </View>;

    let touchableWrapperIos =
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={css.colors.transparent_white}
        onPress={
          () => {
            //console.log(this.props);
            this.props.navigation.navigate('ResortDetail', {item} );
          }
        }
      >
        {actualRowComponent}
      </TouchableHighlight>;

    if (require('react-native').Platform.OS === 'ios') {
      return touchableWrapperIos;
    }
  };

  // sets up the entire screen
  render() {

    _navigation = this.props.navigation;

    console.log(this.props.navigation.state.params.weatherstore.state.weatherList);

    return (
      <View style={css.home_screen.v_container}>

        <FlatList
          style={css.home_screen_list.container}
          data={this.props.navigation.state.params.weatherstore.state.weatherList}
          renderItem={this.renderRow}
          key={this.state.editing}
        />

        <Footer navigator={_navigation.navigator} />

      </View>

    );

  }// end render()

}

export default WeatherScreen;
