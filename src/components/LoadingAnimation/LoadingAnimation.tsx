import "./LoadingAnimation.css";
import { CircularProgress } from "@mui/material";

export const LoadingAnimation = () => {
  return (
    <div className="loadingAnimation">
      <CircularProgress className=".loadingAnimation-circle" size={"60px"} />
    </div>
  );
};
