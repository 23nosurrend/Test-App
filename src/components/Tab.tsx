import { ReactElement } from "react";

import "../styles/Tab.css"


interface Tabprops{
    text:string;
    svg?:ReactElement
  

}
function Tab({text,svg}:Tabprops){
    return(
        <div>
            
            <div className="Tab-div">
              <div className="Tab-div-inner">
                <div className="icon-div">{svg}</div>
                <div className="text-div"><h4>{text}</h4></div>
              </div>
            </div>
           
            

        </div>
    )
}

export default Tab