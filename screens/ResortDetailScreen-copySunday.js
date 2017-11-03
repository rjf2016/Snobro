// @flow

import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {Icon} from "react-native-elements";

import * as css from "./Styles";

class ResortDetailScreen extends Component {

  static navigationOptions = {
    title: `Resort Detail`,
  };

  renderRow({item}) {

    //let {key, time, icon, temp} = item;
    let {key, day, icon, temp} = item;

    const {iconName, iconFont, iconColor} = icon;

    temp = css.addDegreesToEnd(temp);

    return (
      <View>
        <Text style={css.details_screen_1.list_row_time}>{day}</Text>
        <Icon color={iconColor} size={css.values.tiny_icon_size} name={iconName} type={iconFont} />
        <Text style={css.details_screen_1.list_row_temp}>{temp}</Text>
      </View>
    );
  }

  render() {

    const {description, currentTemp, icon, key, place, time, dailyForecast} =
      this.props.navigation.state.params;

    const {iconName, iconFont, iconColor} = icon;

    const {weeklyForecast} = this.props.navigation.state.params;

    const temp = css.addDegreesToEnd(currentTemp);

    return(

      <View style={css.details_screen_1.v_container}>
        <Text style={css.details_screen_1.place}>{place}</Text>
        <Text style={css.details_screen_1.description}>{description}</Text>
        <Icon color={iconColor} size={css.values.large_icon_size} name={iconName}
              type={iconFont}/>
        <Text style={css.details_screen_1.current_temp}>{temp}</Text>
        <View style={css.details_screen_1.separator}></View>

<View  style={css.details_screen_1.h_container}>
        <FlatList
            //style={css.details_screen_1.list_container}
            data={weeklyForecast}
            horizontal={true}
            renderItem={this.renderRow}
          />
  </View>
    </View>



    );

  }

}

export default ResortDetailScreen;
