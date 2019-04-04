import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation
import RootNav from './navigations/RootNav'

//Store
import { Provider } from 'react-redux'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootNav/>
      </Provider>
    );
  }
}

