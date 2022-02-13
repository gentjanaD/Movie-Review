const BASE_URL = "https://movied.herokuapp.com";

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

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchDiscoverMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    return fetch(`${BASE_URL}/discover`)
      .then(handleError)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
};

export const fetchMoviesByCatId = (id) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    return fetch(`${BASE_URL}/category/${id}`)
      .then(handleError)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
};
