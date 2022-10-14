import "./LoadingAnimation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const LoadingAnimation = () => {
  return (
    <div className="loadingAnimation">
      <FontAwesomeIcon icon={faSpinner} size="3x" spin={true} />
    </div>
  );
};
