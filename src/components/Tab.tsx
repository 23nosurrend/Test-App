import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "../styles/Tab.css"


interface Tabprops{
    text:string;
    svg?:ReactElement;
    head?:string;
    path:string;
    backColor?:string;
    textColor?:string;
    className?:string;
    isSelected?:boolean;
    onClick?:()=>void
   isCorrect?:boolean
  

}
function Tab({text,svg,head,path,backColor,textColor,className,isSelected,isCorrect,onClick}:Tabprops){
  const tabClassName=`${className} ${isSelected ? "selected-tab" : ""} ${isCorrect===true ? "correct-tab":isCorrect===false?"incorrect-tab":""}`

    return(
        <div  className={ tabClassName} onClick={onClick}>
            <Link to={path} id="Tab-link">
            <div className="Tab-div">
              <div className="Tab-div-inner">
                <div className="icon-div" style={{ backgroundColor: backColor }}>{svg? svg:<p style={{ backgroundColor: backColor,color:textColor }}>{head}</p>}</div>
                <div className="text-div"><h4 id="text-div-h4">{text}</h4></div>
              </div>
            </div>
            </Link>
            
           
            

        </div>
    )
}

export default Tab