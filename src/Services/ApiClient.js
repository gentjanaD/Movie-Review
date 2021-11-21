const BASE_URL = "https://movied.herokuapp.com";

export const GetMovies = () => {
  return fetch(`${BASE_URL}/discover`).then((res) => res.json());
};
