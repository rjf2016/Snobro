// @flow

import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {Icon} from "react-native-elements";

import DailyWeather from "../components/DailyWeather";
import DetailSummary from "../components/DetailSummary";
import * as css from "./Styles";

class ResortDetailScreen extends Component {

  static navigationOptions = {
    title: `Resort Detail`,
  };

  renderRow({item}) {
  //let {key, time, icon, temp} = item;
    let {temp, weather} = item;

    //const {iconName, iconFont, iconColor} = icon;
    var iconName = 'ios-sunny-outline';
    var iconFont =  'ionicon';
    var iconColor = '#FFCF17';

    temp = css.addDegreesToEnd(temp);

    return (
      <View>
        <Text style={css.details_screen_1.list_row_temp}>{temp}</Text>
        <Icon color={iconColor} size={css.values.tiny_icon_size} name={iconName} type={iconFont} />
        <Text style={css.details_screen_1.list_row_temp}>{weather}</Text>

      </View>
    );
  }

  render() {

    const {description, currentTemp, icon, key, place, time} = this.props.navigation.state.params.item;
    const {iconName, iconFont, iconColor} = icon;
    const {weeklyForecast} = this.props.navigation.state.params.item.weeklyForecast.forecast;

    console.log(this.props.navigation.state.params.item.weeklyForecast.forecast);

    const temp = css.addDegreesToEnd(currentTemp);

    return(
      <View style={css.details_screen_1.x_container}>
      <View style={css.details_screen_1.v_container}>
            <Text style={css.details_screen_1.place}>{place}</Text>
            <Text style={css.details_screen_1.description}>{description}</Text>
            <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
                  type={iconFont}/>
            <Text style={css.details_screen_1.current_temp}>{temp}</Text>
            <View style={css.details_screen_1.separator}></View>
      </View>
        <View  style={css.details_screen_1.h_container}>
            <DailyWeather data={this.props.navigation.state.params.item.weeklyForecast.forecast} />
        </View>
        <View style={css.details_screen_1.separator}></View>
        <View>
          <DetailSummary />
        </View>
      </View>
    );





    //this was working!!!
    // return(
    // <View style={css.details_screen_1.v_container}>
    //     <Text style={css.details_screen_1.place}>{place}</Text>
    //     <Text style={css.details_screen_1.description}>{description}</Text>
    //     <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
    //           type={iconFont}/>
    //     <Text style={css.details_screen_1.current_temp}>{temp}</Text>
    //     <View style={css.details_screen_1.separator}></View>
    //
    //     <View  style={css.details_screen_1.h_container}>
    //           <FlatList
    //               data={this.props.navigation.state.params.item.weeklyForecast.forecast}
    //               horizontal={true}
    //               renderItem={this.renderRow}
    //             />
    //     </View>
    //   </View>
    // );

  }

}

export default ResortDetailScreen;
