// @flow

import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {Icon} from "react-native-elements";
//import DailyWeather from "../components/DailyWeather";
import * as css from "./Styles";

class ResortDetailScreen extends Component {

  static navigationOptions = {
    title: `Resort Detail`,
  };

  // constructor(props) {
  //   super(props);
  //      this.renderRow = this.renderRow.bind(this);
  //   }
  //
  //   componentDidMount() {
  //   this.props.navigation.setParams({
  //          editing: '',
  //       });
  // }




   render() {

     console.log(this.props.navigation.state.params);

    const {description, currentTemp, icon, key, place, time} =
       this.props.navigation.state.params.item;
    const {iconName, iconFont, iconColor} = icon;
    const {weeklyForecast} = this.props.navigation.state.params.item.weeklyForecast.forecast;

    const temp = css.addDegreesToEnd(currentTemp);

    return (
     <View>
        <FlatList
          //style={css.details_screen_1.list_container}
          // data={weeklyForecast}
          // horizontal={true}
          renderItem={this.renderRow} />
      </View>
      );
    }
    //  return (
    //    <View style={css.details_screen_1.v_container}>
    //      <Text style={css.details_screen_1.place}>{place}</Text>
    //      <Text style={css.details_screen_1.description}>{description}</Text>
    //      <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
    //            type={iconFont}/>
    //      <Text style={css.details_screen_1.current_temp}>{temp}</Text>
    //      <View style={css.details_screen_1.separator}></View>
     //
    //   <View><Text>Top</Text></View>
    //   <View>
    //      <FlatList
    //        //style={css.details_screen_1.list_container}
    //        data={weeklyForecast}
    //        horizontal={true}
    //        renderItem={this.renderRow}
    //      />
    //    </View>
    //    <View>
    //      <Text>Hello There</Text>
    //    </View>
    //  </View>
    //  );



}

export default ResortDetailScreen;
