import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  Image,
  AppRegistry
} from 'react-native';

import {firebaseApp} from './base';


var resortArray = [];
	
import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2D3E',
  },
});


class WeatherDetailScreen extends Component {

  
  static navigationOptions = ({ navigation }) => {
  	const { state, setParams } = navigation;
  	const { params } = state;
    return {
      title: `${params.title}`,
    }
  };

	  constructor(props) {
		  super(props);
		  this.state = {
		    dataSource: new ListView.DataSource({
		      rowHasChanged: (row1, row2) => row1 !== row2,
		    })
		  };
		  //this.resortsRef = this.getRef().child('Resorts');
		}

		componentDidMount() {
		  // this.listenForItems(this.itemsRef);
		  //this.listenForResortItems(this.resortsRef);
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


// getRef() {
//   return fb.database().ref();
//  }


  render() {

    return (
     // <ListItem item={item} onPress={onPress} />
     <Text>Made it to WeatherDetail</Text>
    );
}

}

export default WeatherDetailScreen;






