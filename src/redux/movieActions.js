const BASE_URL = "https://movied.herokuapp.com";

export const fetchMoviesRequest = () => {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
};

export const fetchMoviesSuccess = (data) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: data.movies,
    category: data.category,
  };
};
export const fetchMoviesFailure = (error) => {
  return {
    type: "FETCH_MOVIES_FAILURE",
    payload: error,
  };
};

export const fetchDiscoverMoviesRequest = () => {
  return {
    type: "FETCH_DISCOVER_MOVIES_REQUEST",
  };
};

export const fetchDiscoverMoviesSuccess = (data) => {
  return {
    type: "FETCH_DISCOVER_MOVIES_SUCCESS",
    payload: data,
  };
};
export const fetchDiscoverMoviesFailure = (error) => {
  return {
    type: "FETCH_DISCOVER_MOVIES_FAILURE",
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
    dispatch(fetchDiscoverMoviesRequest);
    return fetch(`${BASE_URL}/discover`)
      .then(handleError)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchDiscoverMoviesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchDiscoverMoviesFailure(error)));
  };
};

export const fetchMoviesByCatId = (cat) => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest);
    return fetch(`${BASE_URL}/categories/${cat.id}`)
      .then(handleError)
      .then((res) => res.json())
      .then((data) => {
        console.log("mAdata", data);
        dispatch(fetchMoviesSuccess({ movies: data, category: cat.name }));
        return data;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
};
