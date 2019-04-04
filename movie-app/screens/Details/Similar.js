import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import { withNavigation } from 'react-navigation'

class Similar extends Component {
  render() {
    return (
      <>
        <Text style={styles.text}>You might also like: </Text>
        <ScrollView style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            {this.props.similarMovies.map(movie =>
              <TouchableOpacity key={movie.id} onPress={() => this.props.navigation.replace('Details', {movieId: movie.id})}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  style={styles.similarMovieImage}
                />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    margin: 20
  },
  similarMovieImage: {
    width: 100,
    height: 150,
    margin: 10
  },
})

export default withNavigation(Similar)