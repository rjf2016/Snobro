import React, { Component } from "react";
import { 
  View,
  Text, 
  ListView, 
  StyleSheet,
  TouchableHighlight,
  AlertIOS,
  Image,
  AppRegistry
} from "react-native";

import firebase from 'firebase';

var resortArray = [];

const ListItem = require('./components/ListItem');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTKJZcHqJWllerYuEY_P0N4vPuwKzpHDI",
    authDomain: "snowvt-29682.firebaseapp.com",
    databaseURL: "https://snowvt-29682.firebaseio.com",
    projectId: "snowvt-29682",
    storageBucket: "snowvt-29682.appspot.com",
    messagingSenderId: "57138291605"
  };

const firebaseApp = firebase.initializeApp(config);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#2C2D3E',
  },
});

class SnowBro extends Component {
  constructor(props) {
    super(props);

    

     this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    // this.itemsRef = this.getRef().child('State/VT');
    // this.itemsRef = this.getRef().child('Forecast');
    this.resortsRef = this.getRef().child('Resorts');

    console.log(this.getRef());

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
        console.log('Hereeeee');
        console.log(d);
        resortsArray.push(d)
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resortsArray)
      });

    });  //end itemsRef.on




  }


  listenForItems(itemsRef) {
    
    console.log('Hello 2');


  this.itemsRef.on('value', (snap) => {

      weatherArray = [];
      console.log('Hello 3');
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        console.log(child.key);
        var d = child.val();
        weatherArray.push(d)
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(weatherArray)
      });

    });  //end itemsRef.on




  }



render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
      />
    );
  }

 getRef() {
    return firebaseApp.database().ref();
  }



_renderItem(item) {

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

    return (
      <ListItem item={item} onPress={onPress} />
    );
}





}


AppRegistry.registerComponent('SnowBro', () => SnowBro);
