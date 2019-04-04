import React from 'react'
import {  } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import NowPlaying from '../screens/NowPlaying'
import Details from '../screens/Details/Details'

export default createStackNavigator({
  Movies: {
    screen: NowPlaying,
    navigationOptions: {
      headerBackTitle: null
    }
  },
  Details: {
    screen: Details
  }
}, {
  initialRouteName: "Movies",
  defaultNavigationOptions:  {
    headerStyle: {
      backgroundColor: "black",
      borderBottomColor: "black"
    }
  }
})