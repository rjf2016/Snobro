import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

import * as css from "../screens/Styles"; 



class DetailSummary extends Component {


  constructor (props) {
     super(props);
   }

  render() {
    const postObj = this.props.data;

    if (postObj)
    {
      let description = postObj.get('day1_weather');
      let place = postObj.get('resort');
      let tempr = postObj.get('temp');

      let fakeTempHi = postObj.get('temp_hi');
      let fakeTempLow = postObj.get('temp_lo');
      let fakeFeelsLike = postObj.get('temp_feelsLike');
      let chance_rain = postObj.get('chance_rain');
      let chance_snow = postObj.get('chance_snow');
      let visibility = postObj.get('visibility');
      let wind = postObj.get('wind');



    //     let fakeTempHi = css.addDegreesToEnd(29);
    //     let fakeTempLow = css.addDegreesToEnd(21);
    //     let fakeFeelsLike = css.addDegreesToEnd(20);
    // }


    return (

      <ScrollView style={css.details_screen_1.fullSummaryContainer}>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Temp high</Text>
            <Text style={css.details_screen_1.summaryRowText}>{fakeTempHi}</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Temp Low</Text>
            <Text style={css.details_screen_1.summaryRowText}>{fakeTempLow}</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Chance of snow</Text>
            <Text style={css.details_screen_1.summaryRowText}>{chance_snow}</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Chance of rain</Text>
            <Text style={css.details_screen_1.summaryRowText}>{chance_rain}</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Wind</Text>
            <Text style={css.details_screen_1.summaryRowText}>{wind}</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Feels like</Text>
            <Text style={css.details_screen_1.summaryRowText}>{fakeFeelsLike}</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Precipitation</Text>
            <Text style={css.details_screen_1.summaryRowText}>0 in</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Visibility</Text>
            <Text style={css.details_screen_1.summaryRowText}>10 mi</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

      </ScrollView>
    )
    }
  }
}



export default DetailSummary;
