/* @flow */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import AppContainer from './AppContainer'
export default class SnowBro extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


AppRegistry.registerComponent('SnowBro', () => AppContainer);

