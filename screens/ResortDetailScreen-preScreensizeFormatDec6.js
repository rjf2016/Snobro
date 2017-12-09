// @flow

import React, {Component} from "react";
import {FlatList, Text, View, Image} from "react-native";

import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import {Icon} from "react-native-elements";
import {observer} from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import DailyWeather from "../components/DailyWeather";
import DetailSummary from "../components/DetailSummary";
import MountainDetails from "../components/MountainDetails";
import * as css from "./Styles";

@observer
export default class ResortDetailScreen extends Component {

  static navigationOptions = props => {
    return {
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', top: 0, borderBottomWidth: 0, left: 0, right: 0},
        headerTintColor: 'ghostwhite',
        headerBackTitleStyle:{color: 'white', zIndex: 100},
        
    }

    // title: `Resort Detail`,
  };



  constructor (props) {
     super(props);

     console.log(this.navigationOptions);

   }


  renderDotIndicator() {
        return <PagerDotIndicator style={{marginBottom: 30}} pageCount={3} selectedDotStyle={{backgroundColor: 'skyblue'}} />;
    }

  render() {
    const postKey = null;
    const { weather } = this.props.screenProps.store;
    //const { resort } = this.props.screenProps.store;

   
    const selectedResort = this.props.navigation.state.params.selectedResort;

    const resObj = weather.getData('resortdata_'+ selectedResort);
    const postObj = weather.getData('userdata_'+ selectedResort);


    const ents = postObj ? postObj.entries() : postObj
    const resEnts = resObj ? resObj.entries() : resObj

   
      let description = postObj.get('day1_weather');
      let place = postObj.get('resort');
      let tempr = postObj.get('temp');

    let {iconName, iconFont, iconColor} = css.getWeatherIcons(postObj.get('day1_weather'))

      

      const temp = tempr; //css.addDegreesToEnd(tempr);

    return(
      <View style={css.details_screen_1.x_container}>
        <Image style={{flex:1, top: 0, left: 0, position: 'absolute', width:'100%', height:'100%', resizeMode: 'cover'}} source={require('../images/snowy-forecast.jpg')} />
      
      <View style={css.details_screen_1.v_container}>
                  
            <Text style={css.details_screen_1.place}>{place}</Text>
            <Text style={css.details_screen_1.description}>{description}</Text>
            <Icon color={iconColor} size={css.values.large_icon_size} name={iconName} type={iconFont}/>
            <Text style={css.details_screen_1.current_temp}>{temp}</Text>
            <View style={css.details_screen_1.separator}></View>
             
      </View>


       



      <View  style={css.details_screen_1.h_container}>
          <DailyWeather data={postObj}  />
      </View>

      <View style={css.details_screen_1.separator}></View>

      <View style={css.details_screen_1.detailBlock}>
        <IndicatorViewPager
            style={{ flex: 1 }}
            indicator={this.renderDotIndicator()}>
          <View>
            <MountainDetails data={resObj} />
          </View>
          <View>
            <DetailSummary data={postObj} />
          </View>
        </IndicatorViewPager>
      </View>

      </View>
    );

    //}
  }
}
