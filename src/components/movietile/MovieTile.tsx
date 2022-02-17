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
  isClicked?: string;
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
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          fancy Modal
        </Modal>
        <div className="movieTile" onClick={() => setIsModalOpen(true)}>
          <div>
            <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieTile;
