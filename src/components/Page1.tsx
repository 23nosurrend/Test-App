
import "../styles/Page.css"
import AccessNav from "./AccessNav"
import Question from "./Question"
import Tab from "./Tab"

function Page(){
    return(
          <div>
            <div><AccessNav/></div>
            <div className="inner">
                <div className="inner-container">
                <div>
                    <Question/>
                </div>
                <div>
                    <Tab text="4:5.1"/>
                    <Tab text="3.5:1"/>
                    <Tab text="2:5.1"/>
                    <Tab text="5:1"/>
                </div>

            </div>
            </div>
            
          </div>
    )
}

export default Page