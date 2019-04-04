import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import Slider from '../components/Slider'
import Error from '../components/Error'

//Store
import { connect } from 'react-redux'
import { fetchNowPlaying } from '../store/actions/fetchApi'

const { width, height } = Dimensions.get('window');

class NowPlaying extends Component {
  state = {
    page: 1,
    loadMore: false
  }

  componentDidMount = () => {
    this.props.getNowPlaying(this.state.page)
  }
  
  fetchNextPage = async () => {
    this.setState({page: this.state.page + 1, loadMore: true}, 
    () => this.props.getNowPlaying(this.state.page))
  }

  latestMovie = () => {
    let movies = this.props.latestMovie.map((movie) => {
      return (
        <TouchableOpacity key={movie.id} onPress={() => this.props.navigation.navigate('Details', {movieId: movie.id})}>
          <Image
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
            style={{width: width, height: height/3}}
          />
        </TouchableOpacity>
      )
    })

    return movies
  }

  loading = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  renderFooter = () => {
    if (!this.props.loading) return null;

    return this.loading()
    
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.loading && !this.state.loadMore ?
          this.loading() :
          !this.props.error ?
          (<View>
            <FlatList
            data={this.props.nowPlaying}
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={
              <Slider content={this.latestMovie()}/>
            }
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.smallContainer} onPress={() => this.props.navigation.navigate('Details', {movieId: item.id})}>
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.image}/>
                </TouchableOpacity>
              )
            }
            }
            numColumns={ 3 }
            keyExtractor={(item, index) => index}
            onEndReached={this.fetchNextPage}
            onEndReachedThreshold = { 0 }
            
          />
          </View>)
          : 
          (<Error/>)
        }
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallContainer: {
    flex: 1, 
    alignItems: 'center',
    marginBottom: 15
  },
  text: {
    color: 'white'
  },
  image: {
    width: 100,
    height: 150, 
  }
});

const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  loading: state.loading,
  error: state.error,
  latestMovie: state.latestMovie
})

const dispatchStateToProps = (dispatch) => ({
  getNowPlaying: (page) => dispatch(fetchNowPlaying(page))
})

export default connect(mapStateToProps, dispatchStateToProps)(NowPlaying)