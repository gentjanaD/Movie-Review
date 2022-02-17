import React, { useState } from "react";
import "./MovieTile.css";
import { Movie } from "../../Types/movieTypes";
import { FcCheckmark } from "react-icons/fc";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Modal from "../modal/Modal";
type Props = {
  addToWatchList?: (movie: any) => void;
  onList?: boolean;
  deleteFromList?: (movie: any) => void;
  movie: Movie;
  watchList?: Movie[];
};

const MovieTile: React.FC<Props> = ({
  addToWatchList,
  onList,
  deleteFromList,
  watchList,
  movie,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickAddToWatchList = () => {
    addToWatchList(movie);
  };
  const onClickDeleteFromWatchList = () => {
    deleteFromList(movie);
  };

  return (
    <>
      {/* {console.log("mon", movie)} */}
      <div className="modal_div">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img
            className="modal_design"
            src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="modalContent">
            <button
              className="addButtonInModal"
              onClick={onClickAddToWatchList}
            >
              <h3>+</h3>
            </button>
            <p id="addButtonText">Add To Watch list</p>
          </div>
        </Modal>
        <div className="movieTile">
          <div>
            <img
              className="moviePoster"
              src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
            />
            {onList ? (
              watchList
                .map((singleMovie) => singleMovie.title)
                .includes(movie.title) ? (
                <button className="addButton" onClick={onClickAddToWatchList}>
                  <FcCheckmark />
                </button>
              ) : (
                <button
                  className="addButton"
                  title="Add to watch list"
                  onClick={onClickAddToWatchList}
                >
                  <IoIosAdd />
                </button>
              )
            ) : (
              <button
                className="deleteButton"
                title="Remove from watch list"
                onClick={onClickDeleteFromWatchList}
              >
                <IoIosRemove />
              </button>
            )}
            <div
              className="transparent_click_div"
              onClick={() => setIsModalOpen(true)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieTile;
