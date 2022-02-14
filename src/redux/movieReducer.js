const initialState = {
  loading: false,
  movies: {},
  error: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        loading: false,
        movies: { ...state.movies, [action.category]: action.payload },
        error: "",
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        loading: false,
        movies: [],
        error: action.payload,
      };
    case "FETCH_DISCOVER_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "FETCH_DISCOVER_MOVIES_SUCCESS":
      return {
        loading: false,
        movies: { ...state.movies, Discover: action.payload },
        error: "",
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        loading: false,
        movies: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
