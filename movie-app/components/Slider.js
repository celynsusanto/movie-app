import React, { Component } from 'react'
import { View , Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'


export default class Slider extends Component {
  render() {
    return (
      <Swiper
        autoplay
        height={240}
        >
          {this.props.content}
      </Swiper>
    )
  }
}