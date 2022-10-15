import React, { useRef, useState } from "react";
import "./MoviePoster.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

interface MoviePosterProps {
  imgUrl: string;
  name: string;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({ imgUrl, name }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgValid, setImgValid] = useState(true);

  if (imgUrl && imgValid) {
    return (
      <div className="moviePoster">
        <img
          src={imgUrl}
          className="moviePoster-img"
          ref={imgRef}
          alt={`${name}-poster`}
          onError={(e) => {
            setImgValid(false);
            console.log("error");
          }}
        ></img>
      </div>
    );
  } else {
    return (
      <div className="moviePoster moviePoster-placeHolder">
        <span>{name}</span>
        <FontAwesomeIcon
          icon={faFilm}
          className="moviePoster-placeHolder-icon"
          size="6x"
        />
      </div>
    );
  }
};
