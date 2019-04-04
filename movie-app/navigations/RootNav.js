import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MovieNav from './MovieNav'

export default createAppContainer(
  createSwitchNavigator({
    Movies: {
      screen: MovieNav
    }
  }, {
    initialRouteName: 'Movies',
    tabBarOptions: {
      style: {
        backgroundColor: 'black'
      },
      showLabel: false,
      activeBackgroundColor: "#282b30"
    }
    
  })
)