import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  ListView,
  StyleSheet,
  TouchableHighlight,
  AlertIOS,
  Image,
  AppRegistry
} from 'react-native';

import {firebaseApp} from '../components/base';
import ListItem from '../components/ListItem';

var resortArray = [];
var selectedResort = null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2D3E',
  },
});

class WeatherScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`,
    }

  };

		navigate = (WeatherDetail) => {
              const {navigate} = this.props.navigation;
              navigate('WeatherDetail', { title: selectedResort });
					}

	  constructor(props) {
		  super(props);
		  this.state = {
		    dataSource: new ListView.DataSource({
		      rowHasChanged: (row1, row2) => row1 !== row2,
		    })
		  };
		  this.resortsRef = this.getRef().child('Resorts');
		}

		componentDidMount() {
		  // this.listenForItems(this.itemsRef);
		  this.listenForResortItems(this.resortsRef);
		}

		listenForResortItems(resortsRef) {

		  this.resortsRef.on('value', (snap) => {

		    resortsArray = [];

		    // get children as an array
		    var items = [];
		    snap.forEach((child) => {
		      var d = child.val();
	        resortsArray.push(d)
		    });

		    this.setState({
		      dataSource: this.state.dataSource.cloneWithRows(resortsArray)
		    });

		  });  //end itemsRef.on
	}

getRef() {
    return firebaseApp.database().ref();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
      />
    );
  }

    _renderItem(item) {

    	const onPress = () => {
    		//AlertIOS.alert(this.props.navigation);
    		selectedResort = item.friendlyname;
     		this.navigate('WeatherDetail');  //, { title: 'tommy', name: 'Detail' });
    };


    return (
     <ListItem item={item}  onPress={onPress} />

    );
}

}


export default WeatherScreen;
