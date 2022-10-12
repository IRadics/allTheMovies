import "./LoadingAnimation.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "@fortawesome/fontawesome-common-types";

export const LoadingAnimation = () => {
  return (
    <div className="loadingAnimation">
      <FontAwesomeIcon icon={faSpinner} size="3x" spin={true} />
    </div>
  );
};
