// @flow

import React, {Component} from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  View
} from "react-native";
import { StackNavigator } from 'react-navigation';
import {Icon} from "react-native-elements";
import * as css from "./Styles";
import {listData} from "./Data";

 class HomeScreen extends Component {

   // reference to navigator
   _navigation;

  // static navigationOptions = ({ navigation }) => {
static navigationOptions = props => {
     //const { state, setParams } = navigation;
     //const { params } = state;
     const { navigation } = props;
     const { state, setParams } = navigation;
     const { params } = state;

    // const { editing } = state.params || false;

     return {
       title: `${navigation.state.params.title}`,
       headerRight: (
        //  <Button
        //    title={params.mode === 'edit' ? 'Done' : 'Edit'}
        //    onPress={() =>
        //      setParams( { mode: params.mode === 'edit' ? '' : 'edit' } )}
        //  />
        <Button
          title={params.editing === 'edit' ? 'Done' : 'Edit'}
          onPress={() => state.params.handleEdit() }
        />
       ),
     }
   };

  handleEdit(){

    if(this.state.editing == ''){
          this.setState({  editing: 'edit' });
          this.props.navigation.setParams({
                  editing: 'edit',
              });
              return;
    }

    if(this.state.editing == 'edit'){
          this.setState({  editing: 'done' });
          this.props.navigation.setParams({
                  editing: 'done',
              });
              return;
    }

    if(this.state.editing == 'done'){
          this.setState({  editing: 'edit' });
          this.props.navigation.setParams({
                  editing: 'edit',
              });
    }


    console.log(this.props.navigation.state);
    console.log(this.state);
  }

   constructor(props) {
     super(props);

     this.state = {
       editing: ''
      }
      this.renderRow = this.renderRow.bind(this);


    }

    componentDidMount() {

      this.props.navigation.setParams({
           editing: '',
            handleEdit: this.handleEdit.bind(this),
        });

    }



  // only renders each list item
  renderRow({item}) {

    const time = `${item.time}`;
    const place = `${item.place}`;
    const temp = css.addDegreesToEnd(item.currentTemp);
    const opentrails = `${item.openTrails}`;
    const {iconName, iconFont, iconColor} = item.icon;

    console.log(this.state);


    let actualRowComponent =
      <View style={css.home_screen_list.row}>

        <View style={css.home_screen_list.row_cell_timeplace}>
          <Text style={css.home_screen_list.row_time}>{time}</Text>
          <Text style={css.home_screen_list.row_place}>{place}</Text>
        </View>
        {/* <View style={css.home_screen_list.row_cell_trails}>
          <Text style={css.home_screen_list.row_trails}>Trails</Text>
          <Text style={css.home_screen_list.row_trails}>{opentrails}</Text>
        </View> */}
        <View>
          <Text style={css.home_screen_list.row_trails}>Trails</Text>
          <Text style={css.home_screen_list.row_trails}>56</Text>
        </View>

          { this.state.editing == 'edit'
          ? <TouchableOpacity style={css.home_screen_list.row_buttonContainer} onPress={this.onLoginClick}><Text style={css.home_screen_list.row_buttonText}>Delete</Text></TouchableOpacity>
          : <View><Icon color={iconColor} size={css.values.small_icon_size} name={iconName} type={iconFont} />
          <Text style={css.home_screen_list.row_cell_temp}>{temp}</Text></View>
          }

      </View>;

    let touchableWrapperIos =
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={css.colors.transparent_white}
        onPress={
          () => {
            //this._navigation.navigate("DetailsRoute", {...item});
            console.log(this.props);
            this.props.navigation.navigate('ResortDetail', {...item});
          }
        }
      >
        {actualRowComponent}
      </TouchableHighlight>;


    if (require('react-native').Platform.OS === 'ios') {
      return touchableWrapperIos;
    }
  //  else return touchableWrapperAndroid;

  };

  // sets up the entire screen
  render() {

    _navigation = this.props.navigation;


console.log(this.state);

    return (
      <View style={css.home_screen.v_container}>
        {/* <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          barStyle={'light-content'}
          backgroundColor={css.colors.secondary}
        /> */}

        <FlatList
          style={css.home_screen_list.container}
          data={listData}
          renderItem={this.renderRow}
          key={this.state.editing}
        />

      </View>

      
    );

  }// end render()





}

export default HomeScreen;
