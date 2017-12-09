// @flow
import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {Icon} from "react-native-elements";

import * as css from "../screens/Styles";

class DailyWeather extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.renderRow = this.renderRow.bind(this);
  }

  renderRow({item}) {

    let {temp, weather} = item;
    let {iconName, iconFont, iconColor} = css.getWeatherIcons(item.weather)
   
    return (
     <View style={css.details_screen_1.widget}>
        <Text style={css.dailyWeather.temp}>{temp}</Text>
        <Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
        <Text style={css.dailyWeather.phase}>{weather}</Text>
      </View>
    );
  }
  render() {

      const d = this.props.data;

      var data = [
            {temp: d.get('day1_temp'), weather: d.get('day1_weather')},
            {temp: d.get('day2_temp'), weather: d.get('day2_weather')},
            {temp: d.get('day3_temp'), weather: d.get('day3_weather')}
          ]

      return(
        <FlatList
            contentContainerStyle={css.details_screen_1.fListContainer}
            data={data}
            horizontal={true}
            renderItem={this.renderRow}
            scrollEnabled={false}
          />
        )
  }


}

export default DailyWeather;
