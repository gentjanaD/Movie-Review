import axios from "axios";
export const fetchMoviesRequest = () => {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: "FETCH_MOVIES_FAILURE",
    payload: error,
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    axios
      .get("https://movied.herokuapp.com/discover")
      .then((response) => {
        const movies = response.data;
        console.log("moviesAction", movies);
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchMoviesFailure(errorMessage));
      });
  };
};

// export const addToWatchList = (movieId) => {
//   return {
//     type: "ADD_TO_WATCHLIST",
//     payload: movieId,
//   };
// };
