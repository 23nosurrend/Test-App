import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../styles/Tab.css"
import correctIcon from "../assets/images/icon-correct.svg"

interface Tabprops {
  text: string;
  svg?: ReactElement;
  svg2?: React.ReactNode;
  head?: string;
  path: string;
  backColor?: string;
  textColor?: string;
  className?: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  onClick?: () => void;
}

function Tab({
  text,
  svg,
  svg2,
  head,
  path,
  backColor,
  textColor,
  className,
  isSelected,
  isCorrect,
  onClick
}: Tabprops) {
  const tabClassName = `${className} ${
    isSelected ? "selected" : ""
  } ${isCorrect !== undefined ? (isCorrect ? "correct" : "incorrect") : ""}`;

  return (
    <div className={tabClassName} onClick={onClick}>
      <Link to={path} id="Tab-link">
        <div className="Tab-div" id="tab-div-page">
          <div className="Tab-div-inner">
            <div className="icon-div" style={{ backgroundColor: backColor }}>
              {svg ? svg : <p style={{ backgroundColor: backColor, color: textColor }}>{head}</p>}
            </div>
            <div className="text-div">
              <h4 id="text-div-h4">{text}</h4>
              <div>
                {/* Show the correct icon if it's the correct answer */}
                {isCorrect && <img src={correctIcon} alt="Correct" />}
                {/* Show custom content if provided */}
                {!isCorrect && svg2}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Tab;
