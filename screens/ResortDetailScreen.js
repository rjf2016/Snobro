// @flow

import React, {Component} from "react";
import {FlatList, Text, View, Image, StyleSheet} from "react-native";

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
  };



  constructor (props) {
     super(props);
   }


  renderDotIndicator() {
        return <PagerDotIndicator style={{marginBottom: 3}} pageCount={3} selectedDotStyle={{backgroundColor: 'skyblue'}} />;
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


      let weatherStr = postObj.get('day1_weather');
      let backsrc = css.getBackgroundImage(weatherStr)
      let snowsrc = css.getFallingSnowImage();

      const temp = tempr; //css.addDegreesToEnd(tempr);

//<View style={css.details_screen_1.x_container}>
//  <Image style={{flex:1, top: 0, left: 0, position: 'absolute', width:'100%', height:'100%', resizeMode: 'stretch'}} source={backsrc} />
      
//       <View style={styles.backgroundContainer}><Image source={backsrc} resizeMode='stretch' style={styles.backdrop} /></View>
//        <View style={styles.overlay}><Image style={styles.logo} source={snowsrc} /></View> 

     var weatherDisplay = null;
     var snowDisplay = null;

     if (weatherStr.indexOf("Snow") >= 0){
           weatherDisplay = <View style={styles.backgroundContainer}><Image source={backsrc} resizeMode='stretch' style={styles.backdrop} /></View>
           snowDisplay =  <View style={styles.overlay}><Image style={styles.logo} source={snowsrc} /></View> 
     }
     else{
           weatherDisplay = <Image style={{flex:1, top: 0, left: 0, position: 'absolute', width:'100%', height:'100%', resizeMode: 'stretch'}} source={backsrc} />

         }

    return(
      <View style={css.details_screen_1.x_container}>
         
       {weatherDisplay}
       {snowDisplay}
 
      



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
            style={{ flex: 1}}
            indicator={this.renderDotIndicator()}>
          <View>
            <MountainDetails data={resObj} />
          </View>
          <View>
            <DetailSummary data={postObj} />
          </View>
          <View>
            <Image source={{ url:'https://www.stowe.com/_includes/img_retrieve.php?webcam/octagon.jpg'}} style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
          </View>
        </IndicatorViewPager>
      </View>




      </View>
    );

    //}
  }
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
   // opacity: 0.7,
   // backgroundColor: 'white'
    backgroundColor: 'rgba(30,96,218,0.4)'
  },
  logo: {
    
    //height: 310,
    opacity: 0.5,
    //width: 160,
    //height: 52
    backgroundColor: 'rgba(30,96,218,0.4)'
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  }
});
