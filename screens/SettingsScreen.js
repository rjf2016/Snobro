import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';


class SettingsScreen extends Component {
  static navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.title}`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

render() {
    const { state, navigate } = this.props.navigation;

    return (
      <Text>{state.params.title} Screen goes Here!</Text>
    );
  }

}

export default SettingsScreen;
