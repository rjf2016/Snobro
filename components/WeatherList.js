import React, {Component} from 'react';
import MobxFirebaseStore from 'mobx-firebase-store';
import {observer} from 'mobx-react/native';
import {autoSubscriber, createAutoSubscriber} from 'firebase-nest';
import Firebase from 'firebase';
import { observable } from 'mobx';
import {Icon} from "react-native-elements";
import * as css from "../screens/Styles";

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ListView,
  FlatList,
  Image,
} from 'react-native'

  var g = 0;

  

 @autoSubscriber @observer export default class WeatherList extends Component {

   static getSubs(props, state) {
        const {store} = props;
        return store.weather.subs();
    }

  
    subscribeSubs(subs, props, state) {
         const { store } = props;
         const { weather } = store;
         const subscr = weather.subscribeSubsWithPromise(subs);
        return subscr;
        }


    constructor (props) {
       super(props);

       this.renderRow = this.renderRow.bind(this);
       this.state = {
            fetching: false,
            fetchError: null,
            incr: 0,
            store: props
        }
    }

    renderRow( postKey ) {
      const { weather } = this.props.store;
      //const { resort } = this.props.store;
      const postObj = postKey ? weather.getData('userdata_'+ postKey.item[0]) : postKey;
      const ents = postObj ? postObj.entries() : postObj

      //Hey Rick - Hard Coded!!!!  :)
      const iconName = 'ios-sunny-outline';
      const iconFont = 'ionicon';
      const iconColor = '#FFCF17';

      
      if (postObj)
      {
        let resort = postObj.get('resort');
        let time = postObj.get('weather_time');
        let place = postObj.get('resort');
        let temp = postObj.get('temp');

       let {iconName, iconFont, iconColor} = css.getWeatherIcons(postObj.get('day1_weather'))


        let actualRowComponent =

          <View style={!postKey.index ? css.home_screen_list.firstRow : css.home_screen_list.row }>

          <View style={css.home_screen_list.row_cell_timeplace}>
          
            <Text style={css.home_screen_list.row_time}>{time}</Text>
            <Text style={css.home_screen_list.row_place}>{place}</Text>

          </View>

          { this.state.editing == 'edit'
          ? <TouchableOpacity style={css.home_screen_list.row_buttonContainer} onPress={this.onLoginClick}><Text style={css.home_screen_list.row_buttonText}>Delete</Text></TouchableOpacity>
          : <View style={{flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'flex-end', paddingRight: 3}}><Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
          <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text></View>
          }

          
        </View>

        let touchableWrapperIos =
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={css.colors.transparent_white}
            onPress={
              () => {
                this.props.callbackNavigate(postKey.item[0]);  //this was a function provided by WeatherScreen to navigate to ResortDetail
              }
            }
          >
            {actualRowComponent}
          </TouchableHighlight>;

          if (require('react-native').Platform.OS === 'ios') {
            return touchableWrapperIos;
          }
      }
      else
      {
        return (
            <View>
              <Text>  </Text>
            </View>
          )
      }

    }

    render()
    {
      const { weather } = this.props.store;

      const { _autoSubscriberFetching: fetching, _autoSubscriberError: fetchError, error } = this.state

      const weatherlist = weather.getData('Weather');
      const ww = weather.weatherData;
      const datalist = weatherlist ? weatherlist.entries() : []


      return (
          <View>
                <FlatList
                     style={css.home_screen_list.container}
                     ref={ref => this.listRef = ref}
                     data={datalist}
                     renderItem={this.renderRow}
                     extraData={this.state}
                     />

          </View>
      );
    }
}
