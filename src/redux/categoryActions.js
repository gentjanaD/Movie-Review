const BASE_URL = "https://movied.herokuapp.com";

export const fetchCategoriesRequest = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

export const fetchCategoriesSuccess = (movies) => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: movies,
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: "FETCH_CATEGORIES_FAILURE",
    payload: error,
  };
};

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest);
    return fetch(`${BASE_URL}/categories`)
      .then(handleError)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCategoriesSuccess(data));
        console.log("cate", data);
        return data;
      })
      .catch((error) => dispatch(fetchCategoriesFailure(error)));
  };
};
