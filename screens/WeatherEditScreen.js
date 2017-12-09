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

import WeatherEditList from '../components/WeatherEditList';
import WeatherEditFooter from '../components/WeatherEditFooter';
import {observer} from 'mobx-react/native';

@observer
export default  class WeatherEditScreen extends Component {
   _navigation;
   _weatherlist;

   static navigationOptions = props => {
    const { navigation, screenProps } = props;
     const { state, setParams } = navigation;
     const { params } = state;

     const { weatherstore } = screenProps.store.weather;  // const { weatherstore } = props.navigation.state.params.weatherstore;
      
/*
      return {
      <Button
        title={params.mode === 'add' ? '' : '+' />}
        onPress = {() => params.handleAdd && params.handleAdd()} 
        />
*/
     return {
       title: 'Edit Resorts',
       /*
       headerLeft: (
          <Icon style="css.home_screen_edit_list.plus_style" size={css.values.tiny_icon_size} color='green' name='plus-circle' type='font-awesome'
            onPress = {() => params.handleAdd && params.handleAdd()}
        />
       
      ),*/
      headerLeft: null,
       headerRight: (
       <Button
        title={'Done'}
        onPress = { () => navigation.navigate('Weather') }
      />
      ),
       }
     };

saveDetails = () => {
 
  this.setState({mode: 'add'});
}

   navigateWeather = (WeatherScreen) => {
      const {navigate} = this.props.navigation;
      const {auth} = this.props.screenProps.store.auth;
      const {weather} = this.props.screenProps.store.weather;

      navigate('Weather', { title: "", auth: this.state.auth, weatherstore: this.props  });
    }

    constructor(props) {
        super(props)
        
        this.onWeatherNavigate = this.onWeatherNavigate.bind(this);
        this.addNewResort = this.addNewResort.bind(this);
        this.deleteResort = this.deleteResort.bind(this);
          
          this.state = {
            mode: 'delete',
          }
      }
    
  onWeatherNavigate() {
       this.navigateWeather('WeatherScreen');
      }
 
  componentDidMount() {
       this.setState({weatherlist: this.props.screenProps.store.weather.weatherList});

       this.props.navigation.setParams({handleAdd: () => this.saveDetails()} );
     }

 addNewResort(resort) {
    this.props.screenProps.store.newresorts.addResorts(resort);
    this.setState({mode: 'add'});
  }

  deleteResort(resort) {
    this.props.screenProps.store.newresorts.deleteResorts(resort);
    this.setState({mode: 'delete'});
  }

  render() {
    const { store } = this.props.screenProps;

     return (
      <View style={{height: '100%'}}>
        <WeatherEditList store={store} mode={this.state.mode} callbackDelete={this.deleteResort} callbackAddNew={this.addNewResort} callbackNavigate={this.onWeatherNavigate} />
        
        { this.state.mode == 'delete' ? <WeatherEditFooter  callBackAdd={this.saveDetails} /> : null }
      
      </View>
    );

  }

}
