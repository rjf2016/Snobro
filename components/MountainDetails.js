import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

import * as css from "../screens/Styles"; 



class MountainDetails extends Component {
    

  constructor (props) {
     super(props);
   }

  render() {
    const postObj = this.props.data;

    if (postObj) {
      // console.log(this.props);

      let liftsopen = postObj.get('r_liftsopen');
      let trailsopen = postObj.get('r_trailsopen');
      let liftstotal = postObj.get('r_liftstotal');
      let trailstotal = postObj.get('r_trailstotal');
      let surface = postObj.get('r_surface');
      let base = postObj.get('r_base');

      function checkLength(word) {
        if(word.length >= 8) {
          return css.details_screen_1.shrinkSize;
        } else {
          return css.details_screen_1.summaryRowText;
        }
      }


    return (

      <ScrollView style={css.details_screen_1.fullSummaryContainer}>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Lifts open</Text>
            <Text style={css.details_screen_1.summaryRowText}>{liftsopen} / {liftstotal}</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Trails open</Text>
            <Text style={css.details_screen_1.summaryRowText}>{trailsopen} / {trailstotal}</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryLeft}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Surface</Text>
            <Text style={checkLength(surface)}>{surface}</Text>
          </View>
          <View style={css.details_screen_1.summaryRight}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Base snow</Text>
            <Text style={css.details_screen_1.summaryRowText}>{base}</Text>
          </View>
        </View>

        <View style={css.details_screen_1.summarySeparator}></View>

        

      </ScrollView>
    )
      }
  }
}



export default MountainDetails;

