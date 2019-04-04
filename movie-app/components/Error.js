import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

import ErrorImg from '../assets/rush-16.png'

const { width, height } = Dimensions.get('window');

export default class Error extends Component {
  render() {
    return (
      <>
        <Image source={ErrorImg} style={styles.error}/>
        <Text style={styles.errorText}>Oops,</Text>
        <Text style={styles.errorText}>Something went wrong</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    width: width ,
    height: height / 2,
    alignSelf: 'center'
  },
  errorText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});