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

import {firebaseApp} from './base';
//import firebase from 'firebase';



var resortArray = [];
var selectedResort = null;

//const ListItem = require('ListItem');
import ListItem from './ListItem';
  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBTKJZcHqJWllerYuEY_P0N4vPuwKzpHDI",
  //   authDomain: "snowvt-29682.firebaseapp.com",
  //   databaseURL: "https://snowvt-29682.firebaseio.com",
  //   projectId: "snowvt-29682",
  //   storageBucket: "snowvt-29682.appspot.com",
  //   messagingSenderId: "57138291605"
  // };

// const firebaseApp = firebase.initializeApp(config);

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
    /*
    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };
*/
    
}

}


export default WeatherScreen;






