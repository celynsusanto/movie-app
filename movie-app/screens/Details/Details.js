import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native'
import About from './About'
import Similar from './Similar'
import Trailer from './Trailer'
import Error from '../../components/Error'

//Store
import { connect } from 'react-redux'
import { fetchDetails, fetchSimilarMovies, fetchTrailer } from '../../store/actions/fetchApi'

//Nav
import { HeaderBackButton } from 'react-navigation'

const { width, height } = Dimensions.get('window');

class Details extends Component { 
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <HeaderBackButton tintColor={'white'} onPress={() => navigation.navigate('Movies')} />,
    }
  }

  state = {
    showPage: 'About',
    pages: ['About', 'Similar', 'Trailer']
  }

  changePage = (type) => {
    this.setState({showPage: type})
  }

  componentDidMount = () => {
    let movieId = this.props.navigation.getParam('movieId')
    this.props.getDetails(movieId)
    this.props.getSimilarMovies(movieId)
    this.props.getTrailer(movieId)
  }
  
  getTitle = () => {
    return this.props.movieDetails.title
  }

  loading = () => {
    return (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { 
          this.props.loading ? this.loading():
          !this.props.error ?
          (<ScrollView>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.movieDetails.backdrop_path}` }} style={styles.image}/>
            <Text style={[styles.text, {fontSize: 20}]}>{this.props.movieDetails.title}</Text>
            <View style={styles.choice}>
              {this.state.pages.map((page, index) => 
                <Text 
                  key={index}
                  style={{
                    fontSize: 15,
                    color: this.state.showPage === page ? 'crimson' : 'white',
                    margin: 20, 
                  }} 
                  onPress={() => this.setState({showPage: page})}
                >{page}</Text>
              )}
            </View>
            <View>
              {
                this.state.showPage === 'About' && 
                <About overview={this.props.movieDetails.overview} release_date={this.props.movieDetails.release_date}/>
              }
              {
                this.state.showPage === 'Similar' && 
                <Similar similarMovies={this.props.similarMovies}/>
              }
              {
                this.state.showPage === 'Trailer' &&
                <Trailer trailer={this.props.trailer}/>
              }
            </View>
          </ScrollView>) 
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    margin: 20
  },
  image: {
    width: width,
    height: height/3
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  movieDetails: state.details,
  loading: state.loading,
  error: state.error,
  similarMovies: state.similarMovies,
  trailer: state.trailer
})

const dispatchStateToProps = (dispatch) => ({
  getDetails: (movieId) => dispatch(fetchDetails(movieId)),
  getSimilarMovies: (movieId) => dispatch(fetchSimilarMovies(movieId)),
  getTrailer: (movieId) => dispatch(fetchTrailer(movieId))
})

export default connect(mapStateToProps, dispatchStateToProps)(Details)