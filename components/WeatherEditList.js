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
  TouchableOpacity,
  Image,
} from 'react-native'


 @autoSubscriber @observer export default class WeatherEditList extends Component {

   static getSubs(props, state) {
        const {store} = props;
        return store.newresorts.subs();
    }

    subscribeSubs(subs, props, state) {
         const { store } = props;
         const { newresorts } = store;
         const subscr = newresorts.subscribeSubsWithPromise(subs);
        return subscr;
        }

    constructor (props) {
       super(props);

      
       this.renderRow = this.renderRow.bind(this);
       this.renderNewRow = this.renderNewRow.bind(this);
      

       this.state = {
            fetching: false,
            fetchError: null,
            editing: 'edit',
            store: props
        }
    }
    

    onAddClick(placekey) {
      //console.log(placekey);
      this.props.callbackAddNew(placekey);
   }

   onDelClick(placekey){
      this.props.callbackDelete(placekey);

   }

    renderRow( postKey ) {
      const { weather } = this.props.store;
      //const { resort } = this.props.store;
      const postObj = postKey ? weather.getData('userdata_'+ postKey.item[0]) : postKey;
      const ents = postObj ? postObj.entries() : postObj


      if (postObj)
      {
      let place = postObj.get('resort')
     
      let actualRowComponent =

        <View style={css.home_screen_edit_list.row}>
          

          <View style={css.home_screen_list.row_cell_timeplace}>
           <Text style={css.home_screen_list.row_place}>{place}</Text>

          </View>

         <TouchableOpacity style={css.home_screen_list.row_buttonContainer} onPress={this.onDelClick.bind(this, postKey.item[0])}><Text style={css.home_screen_list.row_buttonText}>Delete</Text></TouchableOpacity>
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

    renderNewRow( ResortKey ) {
      let place = ResortKey.item.friendlyname;
      let placeKey = ResortKey.item.resort;
     
      let actualRowComponent =

        <View style={css.home_screen_edit_list.row}>
         <View style={css.home_screen_list.row_cell_timeplace}>
           <Text style={css.home_screen_list.row_place}>{place}</Text>
         </View>
                                                                              
         <TouchableOpacity style={css.home_screen_edit_list.row_buttonContainer} onPress={this.onAddClick.bind(this, placeKey)}><Text style={css.home_screen_list.row_buttonText}>Add</Text></TouchableOpacity>
         </View>

        let touchableWrapperIos =
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={css.colors.transparent_white}
            onPress={
              () => {
                //this.props.callbackNavigate(postKey.item[0]);  //this was a function provided by WeatherScreen to navigate to ResortDetail
              }
            }
          >
            {actualRowComponent}
          </TouchableHighlight>;

          if (require('react-native').Platform.OS === 'ios') {
            return touchableWrapperIos;
          }
     

    }

    render()
    {
      const { weather } = this.props.store;
      const { newresorts } = this.props.store;

      var weatherlist, ww;
      var newresortlist, rr;
      var datalist = [];

      rr = newresorts.newResortData;

     // console.log(this.props.store);

      if(this.props.mode == 'delete'){
          const { _autoSubscriberFetching: fetching, _autoSubscriberError: fetchError, error } = this.state

           weatherlist = weather.getData('Weather');
           ww = weather.weatherData;
           datalist = weatherlist ? weatherlist.entries() : [];
          

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
      else
      {
           newresortlist = newresorts.getData('NewResorts');
           // rr = newresortlist.newResortData;
           // datalist = newresortlist ? newresortlist.entries() : [];
           datalist = this.props.store.newresorts.resorts;
         
           return (
           <View>{ datalist.length > 0 ? 
                <FlatList
                     style={css.home_screen_list.container}
                     ref={ref => this.listRef = ref}
                     data={datalist}
                     renderItem={this.renderNewRow}
                     extraData={this.state}
                     />
                  : <Text>No more resorts to Add</Text>
                }

                </View>
      );

        }




     
    }
}
