import "./MovieScoreBar.css";

interface MovieScoreBarProps {
  percentage: number;
}

export const MovieScoreBar: React.FC<MovieScoreBarProps> = ({ percentage }) => {
  return (
    <div className="movieScoreBar-container">
      <div className="movieScoreBar-background">
        <div
          className="movieScoreBar-bar"
          style={{
            width: `${percentage * 10}%`,
            backgroundColor: `rgb(${255 * (1 - percentage / 10)},${
              255 * (percentage / 10)
            },0)`,
          }}
        >
          <div className="movieScoreBar-bar-percentage">
            {`${Math.round(percentage * 10)}%`}
          </div>
        </div>
      </div>
    </div>
  );
};
