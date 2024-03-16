import {useState} from "react"
import "../styles/Page.css"
import AccessNav from "./AccessNav"
import Question from "./Question"
import Tab from "./Tab"
import Button from "./Button"
import Bar from "./Downbar"
import "../styles/Tab.css"

function Page(){
    const [selectedTab,setSelectedTab]=useState("")
    
    const handleTabSelect=(tab:string)=>{
        setSelectedTab(tab)
    }

    return(
          <div>
            <div><AccessNav/></div>
            <div className="inner">
                <div className="inner-container">
                <div id="div-of-Question-Bar">
                    <div id="Question-div"><Question/></div>
                    <div id="div-with-Bar"><Bar/></div>
                    
                    

                </div>
                <div>
                <div>
                    <Tab isSelected={selectedTab=="A"} onClick={() => handleTabSelect("A")} text="4:5.1" path="/Question" head="A" backColor="#F4F6FA" textColor="#626C7F" className="custom-tab"/><br></br>
                    <Tab text="2:5.1" path="/Question" head="B" backColor="#F4F6FA" textColor="#626C7F"  className="custom-tab"  /><br></br>
                    <Tab text="5:1" path="/Question" head="C" backColor="#F4F6FA" textColor="#626C7F"  className="custom-tab"  /><br></br>
                    <Tab text="5:1" path="/Question" head="D" backColor="#F4F6FA" textColor="#626C7F" className="custom-tab"  /><br></br>
                    {/* <Tab text="3.5:1"/>
                    <Tab text="2:5.1"/>
                    <Tab text="5:1"/> */}
                </div>
                <div>
                    <Button/>
                </div>
                </div>
            </div>
            </div>
            
          </div>
    )
}

export default Page