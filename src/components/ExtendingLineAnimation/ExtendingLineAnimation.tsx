import { useId } from "react";
import "./ExtendingLineAnimation.css";

const ExtendingLineAnimation: React.FC<{
  className?: string;
  animationTime?: number;
  color?: string;
  height?: string;
  borderRadius?: string;
}> = ({
  className,
  animationTime = 1000,
  color = "#FFFFFF",
  height = "1px",
  borderRadius = "0",
}) => {
  const id = "extendingLineAnimation-" + useId().split(":")[1];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `#${id} {--extendingLineAnimation-time: ${animationTime}ms; 
          --extendingLineAnimation-color: ${color};
          --extendingLineAnimation-height: ${height};
          --extendingLineAnimation-borderRadous: ${borderRadius};
        }
          `,
        }}
      ></style>
      <div
        className={"extendingLineAnimation" + ` ${className ? className : ""}`}
        id={id}
      >
        <div
          className={
            "extendingLineAnimation-anim" +
            ` ${className ? className + "-anim" : ""}`
          }
        ></div>
      </div>
    </>
  );
};

export default ExtendingLineAnimation;
