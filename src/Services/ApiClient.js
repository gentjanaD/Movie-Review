const BASE_URL = "https://movied.herokuapp.com";
// import movies from "../movies";

export const GetMovies = () => {
  return fetch(`${BASE_URL}/discover`).then((res) => res.json());
};
