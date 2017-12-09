// @flow

import React from "react";
import {StyleSheet} from "react-native"; 

export const colors = {
  "secondary": '#0686E4',
  "tertiary": '#ffffff',
  "background_dark": '#F0F0F0',
  "text_light": '#ffffff',
  "text_medium": '#464646',
  "text_dark": '#263238',
  "weather_text_color": '#464646',
  "transparent_white": '#FFFFFF00',
  "separator_background": '#E2E2E2',
};

// workaround since on iOS NotoSans works, but not NotoSans-Regular
// on Android it works as expected (ie NotoSans-Regular)
export const getFont = () => {
  if (require('react-native').Platform.OS === 'ios') {
    //return 'NotoSans';
    return 'Helvetica Neue';

  }
  else return 'NotoSans-Regular';
};

export const values = {
  "font_body": getFont(),
  "font_body_size": 14,
  "font_title_size": 20,
  "font_time_size": 12,
  "font_place_size": 26,
  "font_temp_size": 20,
  'border_radius': 2,
  "tiny_icon_size": 24,
  "small_icon_size": 40,
  "large_icon_size": 110,
};

export const dailyWeather = StyleSheet.create({
  fullDaily: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  widget: {

  borderWidth: 1,
    borderColor: "blue"
  },
  temp: {
    textAlign: 'center',
    color: 'ghostwhite',
  },
  icon: {

  },
  phase: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
    color: 'ghostwhite',
  },

});

export const addDegreesToEnd = (temp) => {
  return `${temp}${String.fromCharCode(176)}`
};

var backgroundImages = [
    require('../images/background-snowy.jpg'),
    //require('../images/background-snow.jpg'),
    require('../images/background-sunny.jpg'),
    require('../images/background-cloudy.jpg'),
    require('../images/snow-anim.gif'),
];

export const getFallingSnowImage = () => {
  return backgroundImages[3];
}

export const getBackgroundImage = (weatherConditions) => {

    if(weatherConditions=="Snow" || weatherConditions.indexOf('Snow')>=0 )
      return backgroundImages[0];
    if(weatherConditions=="Clear")
            return backgroundImages[1];
    if(weatherConditions=="Rain" || weatherConditions=="AM Showers" || weatherConditions=="PM Showers")
      return backgroundImages[2];
    if(weatherConditions=="Cloudy" || weatherConditions == "Mostly Cloudy")
      return backgroundImages[2];
    if(weatherConditions=="Partly Cloudy")
        return backgroundImages[2];
    if(weatherConditions=="Partly Sunny" || weatherConditions=="Mostly Sunny" || weatherConditions=="Partly Sunny" || weatherConditions.indexOf('Clear')>=0)
      return  backgroundImages[1];

      return  backgroundImages[2];;
}

export const getWeatherIcons = (weatherConditions) => {

    if(weatherConditions=="Snow" || weatherConditions.indexOf('Snow')>=0 )
      return {iconName: 'ios-snow-outline', iconFont: 'ionicon', iconColor: 'skyblue'}
    if(weatherConditions=="Clear")
            return {iconName: 'ios-sunny', iconFont: 'ionicon', iconColor: '#272e51'}
    if(weatherConditions=="Rain" || weatherConditions=="AM Showers" || weatherConditions=="PM Showers")
      return {iconName: 'ios-rainy', iconFont: 'ionicon', iconColor: '#81848c'}
    if(weatherConditions=="Cloudy" || weatherConditions == "Mostly Cloudy")
      return {iconName: 'ios-cloudy', iconFont: 'ionicon', iconColor: 'darkgrey'}
    if(weatherConditions=="Partly Cloudy")
        return {iconName: 'ios-cloudy', iconFont: 'ionicon', iconColor: 'darkgrey'}
    if(weatherConditions=="Partly Sunny" || weatherConditions=="Mostly Sunny" || weatherConditions=="Partly Sunny" || weatherConditions.indexOf('Clear')>=0)
      return {iconName: 'ios-partly-sunny', iconFont: 'ionicon', iconColor: '#f4df41'}

      return {iconName: 'ios-sunny', iconFont: 'ionicon', iconColor: '#f4df41'}
}
export const home_screen_list = StyleSheet.create(
  {
    container: {
      alignSelf: "stretch",
      marginBottom: -6,
    },
    row: {
      elevation: 1,
      borderRadius: 1,
      borderBottomWidth: 2,
      borderRightWidth: 1,
      // backgroundColor: colors.tertiary,
      borderColor: 'lightgray',
      backgroundColor: 'ghostwhite',
      flex: 1,
      flexDirection: 'row',  // main axis
      
      alignItems: 'center', // cross axis
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 4,
      paddingRight: 4,
      // marginLeft: 4,
      // marginRight: 4,
      marginTop: 5,
      marginBottom: 3,
      height: 85,
    },
    firstRow: {
      elevation: 1,
      borderRadius: 1,
      borderBottomWidth: 2,
      borderRightWidth: 1,
      // backgroundColor: colors.tertiary,
      borderColor: 'lightgray',
      backgroundColor: 'ghostwhite',
      flex: 1,
      flexDirection: 'row',  // main axis      
      alignItems: 'center', // cross axis
      paddingBottom: 10,
      paddingLeft: 4,
      paddingRight: 4,
      // marginLeft: 4,
      // marginRight: 4,
      marginTop: 5,
      marginBottom: 3,
      paddingTop: 20,
      height: 105,
    },

    rowSnow: {
      backgroundColor: 'aliceblue',
    },
    rowSunny: {
      backgroundColor: 'lightskyblue',
    },
    rowCloud: {
      backgroundColor: 'grey',
    },
    rowRain: {
      backgroundColor: 'lightsteelblue',
    },
    rowPartlySunny: {
      backgroundColor: 'lightsteelblue',
    },




    row_buttonContainer:{
       backgroundColor: 'red',
       paddingVertical: 15,
       marginRight: 1,
       width: 75
       //marginLeft: 50
    },
    row_buttonText:{
       color: '#fff',
       textAlign: 'center',
       fontWeight: '700',
       fontSize: values.font_body_size,
    },
    row_cell_timeplace: {
      flex: 2,
      flexDirection: 'column',

    },
    row_cell_trails: {
      flex: 1,
      paddingLeft: 60,
    //  flexDirection: 'column',
    },
    row_cell_temp: {
      color: colors.weather_text_color,
      
      flex: 0,
      fontSize: values.font_temp_size,
      fontFamily: values.font_body,
    },
    row_time: {
      color: colors.weather_text_color,
      textAlignVertical: 'bottom',
      includeFontPadding: false,
      flex: 0,
      fontSize: values.font_time_size,
      fontFamily: values.font_body,
      paddingLeft: 7,
    },
    row_trails: {
      color: colors.weather_text_color,
      textAlignVertical: 'bottom',
      includeFontPadding: false,
      flex: 1,
      fontSize: values.font_temp_size,
      fontFamily: values.font_body,
    },
    row_place: {
      color: colors.weather_text_color,
      textAlignVertical: 'top',
      includeFontPadding: false,
      flex: 2,
      fontSize: values.font_place_size,
      fontFamily: values.font_body,
      fontWeight: '500',
      paddingLeft: 7,
    },
  });

export const home_screen_edit_list = StyleSheet.create(
  {
    container: {
      alignSelf: "stretch",
    },
    row: {
      elevation: 1,
      borderRadius: 1,
      borderBottomWidth: 2,
      borderRightWidth: 1,
      // backgroundColor: colors.tertiary,
      borderColor: 'lightgray',
      backgroundColor: 'ghostwhite',
      flex: 1,
      flexDirection: 'row',  // main axis
      justifyContent: 'flex-start', // main axis
      alignItems: 'center', // cross axis
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      // marginLeft: 4,
      // marginRight: 4,
      marginTop: 4,
      marginBottom: 4,
      height: 60,
    },
   row_buttonContainer:{
       backgroundColor: 'green',
       paddingVertical: 15,
       marginRight: 1,
       width: 75
       //marginLeft: 50
    },

    plus_style:{
        color: 'green',
        paddingLeft: 8
      }

  });

export const home_screen = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: 'snow',
    },
  });

export const details_screen_2 = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      flexDirection: 'column', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: colors.tertiary,
      padding: 8,
    },
    day: {
      //backgroundColor: 'lavender',
      fontSize: 14,
      color: colors.weather_text_color,
    },
    temp: {
      fontSize: 18,
      color: colors.weather_text_color,
    },
    row: {
      alignItems: 'center',
      //backgroundColor: 'lightblue',
      marginLeft: 20,
      marginRight: 20
    },
    list: {
      //backgroundColor: 'lightyellow',
      paddingTop: 20,
    },
  }
);


export const details_screen_1 = StyleSheet.create(
  {
    x_container: {
      flex: 1,

      paddingBottom: 0,
      flexDirection: 'column', // main axis
    //  justifyContent: 'center', // main axis
      //alignItems: 'center', // cross axis
      backgroundColor: colors.tertiary,
 
    },
    widget: {
      width: 140,
      height: 100,
    },

    fListContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      height: 100,
    },
    v_container: {
      alignItems: 'center', // cross axis
      backgroundColor: 'transparent',
      paddingTop: 30,

      //backgroundColor: 'transparent',
    },
    h_container: {

      flexDirection: 'row', // main axis
      justifyContent: 'space-between', // main axis=
      backgroundColor: 'transparent',
      height: 80,
    },
    separator: {
      alignSelf: 'stretch',
      backgroundColor: colors.separator_background,
      height: 1.5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    row_weekly_timeplace: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    place: {
      paddingTop: 15,
      paddingBottom: 15,
      color: 'ghostwhite',
      fontFamily: values.font_body,
      fontSize: 35,
    },
    description: {
      color: 'ghostwhite',
      fontFamily: values.font_body,
      fontSize: 14,
      marginBottom: 10,
    },
    current_temp: {
      color: 'ghostwhite',
      fontFamily: values.font_body,
      fontSize: 35,
      fontWeight: "400",
      marginBottom: 10,
    },
    list_container: {
      //marginTop: 14,
      //alignSelf: "stretch",
    },
    list_row: {
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 12,
    },
    list_row_time: {flex: 1},
    list_row_temp: {paddingLeft: 12},

    detailBlock: {
      flex: 5,
      justifyContent: 'space-between',
      paddingTop: 15,
      backgroundColor: 'transparent',
    },

    summarySeparator: {
      alignSelf: 'stretch',
      backgroundColor: 'ghostwhite',
      //height: 1,
      marginTop: 2,
      marginBottom: 20,
    },
    fullSummaryContainer: {
      marginRight: 40,
      marginLeft: 40,
    },

    summaryRow: {
      flexDirection: 'row',
      height: 29,
    },
    summaryRowHeaderText: {
      textAlign: 'left',
      fontSize: 14,
      color: 'ghostwhite',
      fontFamily: values.font_body,
    },
    summaryRowText: {
      textAlign: 'left',
      fontFamily: values.font_body,
      fontWeight: "400",
      fontSize: 22,
      color: 'ghostwhite'
    },
    summaryRight: {
      width: 100,
      marginLeft: 30,
    },
    summaryLeft: {
      width: 140,
    },
    fullMountainDetailsContainer: {
      marginRight: 40,
      marginLeft: 40,
      paddingTop: 4,
    },
    shrinkSize: {
      fontSize: 16,
      fontWeight: "400",
      color: 'ghostwhite',
    //  alignSelf: 'flex-end',
      textAlign: 'left',
    },


  }
);
//
// export const settings_screen = StyleSheet.create(
//   {
//     v_container: {
//       flex: 1,
//       padding: 8,
//       flexDirection: 'column', // main axis
//       justifyContent: 'flex-start', // main axis
//       alignItems: 'center', // cross axis
//       backgroundColor: colors.tertiary,
//     },
//     text: {
//       color: colors.weather_text_color,
//       fontFamily: values.font_body,
//       fontSize: 20,
//     },
//   }
// );
//
// // more info https://goo.gl/dqw4jF
// export const header = {
//   // background
//   headerStyle: {
//     backgroundColor: colors.secondary,
//   },
//   // arrows
//   headerTintColor: colors.text_light,
//   // my own styles for titleAndIcon
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingLeft: 8,
//   },
//   // my own styles for titleAndIcon
//   text: {
//     paddingLeft: 8,
//     color: colors.text_light,
//     fontFamily: values.font_body,
//     fontSize: values.font_title_size,
//   }
//
// };
//
// // more info https://goo.gl/eawcVg
// export const tabs = {
//   // text
//   labelStyle: {
//     fontFamily: values.font_body,
//     fontSize: values.font_body_size,
//   },
//   activeTintColor: colors.secondary, // text color active tab
//   inactiveTintColor: colors.text_medium, // text color inactive tab
//   indicatorStyle: {backgroundColor: colors.secondary}, // active tab highlight top
//   style: {
//     backgroundColor: colors.tertiary, // background color of tabs
//     borderTopColor: colors.tertiary // active tab highlight bottom
//   }
// };

// styling for for DrawerView.Items in contentOptions
// more info - https://goo.gl/d74VUZ
export const drawer = {
  activeBackgroundColor: colors.tertiary,
  inactiveBackgroundColor: colors.secondary,
  inactiveTintColor: colors.text_light, // text color for inactive drawer items
  activeTintColor: colors.text_dark, // text color for active drawer items
  // style object for text style
  labelStyle: {
    fontFamily: values.font_body,
    fontSize: values.font_title_size,
  },
  // style object for the content section
  style: {
    backgroundColor: colors.secondary,
  },
};
