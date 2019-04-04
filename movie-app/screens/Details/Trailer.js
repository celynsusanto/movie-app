import React, { Component } from 'react'
import { WebView, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class Trailer extends Component {
  render() {
    return (
      <WebView
        source={{uri: `https://www.youtube.com/embed/${this.props.trailer.key}`}}
        style={styles.trailer}
      />
    )
  }
}

const styles = StyleSheet.create({
  trailer: {
    width: width - 50,
    height: height/3,
    alignSelf: 'center'
  }
});

