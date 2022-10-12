import "./PosterPlaceHolder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
interface PosterPlaceHolderProps {
  name: string;
}

export const PosterPlaceHolder: React.FC<PosterPlaceHolderProps> = ({
  name,
}) => {
  return (
    <div className="posterPlaceHolder">
      <span>{name}</span>
      <FontAwesomeIcon
        icon={faFilm}
        className="posterPlaceHolder-icon"
        size="6x"
      />
    </div>
  );
};
