const defaultStore = {
  nowPlaying: [],
  similarMovies: [],
  details: {},
  loading: false,
  error: false,
  latestMovie: [],
  trailer: {}
}

export default function(state=defaultStore, action) {
  const { type, payload } = action

  switch (type) {
    case "FETCH_NOWPLAYING_SUCCESS":
      return { ...state, loading: false, nowPlaying: [...state.nowPlaying, ...payload] }
    case "FETCH_SIMILAR_SUCCESS":
      return { ...state, loading: false, similarMovies: payload }
    case "FETCH_DETAILS_SUCCESS":
      return { ...state, loading: false, details: payload }
    case "FETCH_TRAILER_SUCCESS":
      return { ...state, loading: false, trailer: payload }
    case "LATEST_MOVIE":
      return { ...state, latestMovie: payload }
    case "LOADING":
      return { ...state, loading: true }
    case "ERROR":
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}