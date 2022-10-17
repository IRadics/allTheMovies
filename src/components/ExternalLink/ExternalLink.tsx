import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExternalLink: React.FC<{
  href: string;
  text?: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}> = ({ href, text, target, className }) => {
  return (
    <a
      href={href}
      target={target}
      className={`externalLink${className ? "" + className : ""}`}
    >
      {text ? text : href}{" "}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
    </a>
  );
};
