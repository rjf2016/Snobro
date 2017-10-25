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
  AppRegistry,
  StatusBar,
  Button
} from 'react-native';

import {firebaseApp} from '../components/base';
import {Icon} from 'react-native-vector-icons/FontAwesome';


var resortArray = [];

import ListItem from '../components/ListItem';

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
      // title: `${params.title}`,
      headerStyle: {backgroundColor: '#2C2D3E'},

      // headerLeft:(
      //    <Button
      //     title={'<'} onPress={ () => { navigation.goBack() } }
      //   ),



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

      console.log("HERRRREE");
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
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2C2D3E"
          barStyle="light-content"
        />

      </View>
    );
  }

}

export default WeatherDetailScreen;
