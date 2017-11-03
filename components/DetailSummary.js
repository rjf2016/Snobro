import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import * as css from "../screens/Styles";

class DetailSummary extends Component {
  render() {
    return (
      <View>

        <View style={css.details_screen_1.summaryRow}>
          <View style={css.details_screen_1.summaryRowHeader}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Temp high</Text>
            <Text style={css.details_screen_1.summaryRowText}>64</Text>
          </View>
          <View style={css.details_screen_1.summaryRowBody}>
            <Text style={css.details_screen_1.summaryRowHeaderText}>Temp Low</Text>
            <Text style={css.details_screen_1.summaryRowText}>50</Text>
          </View>
        </View>
        <View style={css.details_screen_1.summarySeparator}></View>
      </View>
    )
  }
}



export default DetailSummary;
