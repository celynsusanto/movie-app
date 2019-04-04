import axios from 'axios'

let apiKey = '7798e4433893518fd4c8f3c229245eb6'
let link = 'https://api.themoviedb.org/3'

export function fetchNowPlaying(page) {
  return dispatch => {
    dispatch({ type: "LOADING" })
    axios
      .get(`${link}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_NOWPLAYING_SUCCESS", payload: data.results })
        if (page === 1) {
          dispatch({ type: "LATEST_MOVIE", payload: data.results.slice(0, 3) })
        }
      })
      .catch((error) => {
        dispatch({ type: "ERROR" })
      })

  }
}
  
export function fetchSimilarMovies(movieId) {
  return dispatch => {
    dispatch({ type: "LOADING" })
    axios
      .get(`${link}/movie/${movieId}/similar?api_key=${apiKey}&language=en-US`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_SIMILAR_SUCCESS", payload: data.results })
      })
      .catch((error) => {
        dispatch({ type: "ERROR" })
      })

  }
}

export function fetchDetails(movieId) {
  return dispatch => {
    dispatch({ type: "LOADING" })
    axios
      .get(`${link}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_DETAILS_SUCCESS", payload: data })
      })
      .catch((error) => {
        dispatch({ type: "ERROR" })
      })

  }
}

export function fetchTrailer(movieId) {
  return dispatch => {
    dispatch({ type: "LOADING" })
    axios
      .get(`${link}/movie/${movieId}/videos?api_key=${apiKey}`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_TRAILER_SUCCESS", payload: data.results[0] })
      })
      .catch((error) => {
        dispatch({ type: "ERROR" })
      })

  }
}