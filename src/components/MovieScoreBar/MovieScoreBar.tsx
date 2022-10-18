import CircularProgressWithLabel from "../CircularProgressWithLabel/CircularProgressWithLabel";
import "./MovieScoreBar.css";

interface MovieScoreBarProps {
  percentage: number;
}

export const MovieScoreBar: React.FC<MovieScoreBarProps> = ({ percentage }) => {
  const getColor = () => {
    return `rgb(${255 * (1 - percentage / 10)},${255 * (percentage / 10)},0)`;
  };

  return (
    <div className="movieScoreBar-container">
      <span className="movieScoreBar-text">{"User\nScore"}</span>

      <CircularProgressWithLabel
        value={percentage * 10}
        thickness={4}
        sx={{
          "& .MuiCircularProgress-circle": { color: getColor() },
          zIndex: "2",
        }}
      />
    </div>
  );
};
