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
      //this.renderRow = this.renderRow.bind(this);
  }

  renderRow({item}) {
    let {temp, weather, iconName, iconFont, iconColor} = item;

    temp = css.addDegreesToEnd(temp);

    // var iconName = 'ios-sunny-outline';
    // var iconFont =  'ionicon';
    // var iconColor = '#FFCF17';

    console.log(temp);
    return (
      // <View style={css.dailyWeather.fullDaily}>
      <View style={css.details_screen_1.widget}>
        <Text style={css.dailyWeather.temp}>{temp}</Text>
        <Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
        <Text style={css.dailyWeather.phase}>{weather}</Text>
      </View>
    // </View>
    );
  }
  render() {

    console.log(this.props.data);

    return (

        <FlatList
            contentContainerStyle={css.details_screen_1.fListContainer}
            //style={css.details_screen_1.list_container}
            data={this.props.data}
            horizontal={true}
            renderItem={this.renderRow}
          />


    );


  }


}

export default DailyWeather;
