export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Category = {
  id: number;
  name: string;
};
export type State = {
  movieReducer: {
    error: string;
    loading: boolean;
    movies: Movie[];
    genre_ids: number;
  };
  categoryReducer: {
    error: string;
    loading: boolean;
    categories: Category[];
  };
};
