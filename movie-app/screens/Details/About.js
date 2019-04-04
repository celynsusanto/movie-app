import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <>
        <Text style={styles.text}>{this.props.overview}</Text>
        <Text style={styles.text}>Release Year: {new Date(this.props.release_date).getFullYear()}</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    margin: 20
  }
})
