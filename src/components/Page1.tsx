import {useState} from "react"
import {  useNavigate,useParams } from "react-router-dom";

import "../styles/Page.css"
import AccessNav from "./AccessNav"
import Question from "./Question"
import Tab from "./Tab"
import Button from "./Button"
import Bar from "./Downbar"
import "../styles/Tab.css"
import Data from "../assets/json/data.json"

function Page(){
    const [selectedTab,setSelectedTab]=useState<number|null>(null)
    const navigate=useNavigate()
    const handleTabClick=(index:number,indexTab:number)=>{
        navigate(`/question/${index}`)
        setSelectedTab(indexTab)
    }
//this si for submit
 
    

   
   

    

    const param=useParams<{index?:string}>()
    let num:number;
    if(param.index){
        num= parseInt(param.index)
    }else{
         num=0
    }
    // const num=param.index ?parseInt(param.index):0;
    // console.log(num)
    
    const category=Data.quizzes[num]
    console.log(category)
    const firstQuestion=category.questions[0]
    const numberOfQuestions=category.questions.length
    const option=firstQuestion.options
    const realAnswer:string=firstQuestion.answer

    const submitBtn=()=>{
    if(selectedTab!==null){
        if(realAnswer===option[selectedTab]){
            alert("you made it")
        }else{
            alert("no")
        }
        
    }else{
        alert("please select answer")
    }
 }
    console.log("answers:",option)

    const head:[string,string,string,string]=["A","B","C","D"]

    return(
          <div>
            <div><AccessNav/></div>
            <div className="inner">
                <div className="inner-container">
                <div id="div-of-Question-Bar">
                    <div id="Question-div">
                        <Question first={1} last={numberOfQuestions}
                         question={firstQuestion.question}
                        />
                        
                        </div>
                    <div id="div-with-Bar"><Bar/></div>
                    
                    

                </div>
                <div>
                <div>
                    {option.map((answers:string,Tabindex:number)=>(
                    <div>
                        
                    <Tab 
                    isSelected={selectedTab===Tabindex}  
                    key={Tabindex} onClick={()=>handleTabClick(num,Tabindex)} 
                     text={answers} path="/Question" head={head[Tabindex]}
                      backColor="#F4F6FA" 
                      textColor="#626C7F"
                       className="custom-tab"
                       isCorrect={selectedTab!==null&& realAnswer===option[selectedTab]}
                       /><br></br>
                    </div>
                    ))}
                   
                    {/* <Tab  isSelected={selectedTab=="B"} isCorrect={isCorrect} onClick={() => handleTabSelect("B",false)}  text="2:5.1" path="/Question" head="B" backColor="#F4F6FA" textColor="#626C7F"  className="custom-tab"  /><br></br>
                    <Tab  isSelected={selectedTab=="C"} isCorrect={isCorrect} onClick={() => handleTabSelect("C",false)}      text="5:1" path="/Question" head="C" backColor="#F4F6FA" textColor="#626C7F"  className="custom-tab"  /><br></br>
                    <Tab  isSelected={selectedTab=="D"} isCorrect={isCorrect} onClick={() => handleTabSelect("D",false)} text="5:1" path="/Question" head="D" backColor="#F4F6FA" textColor="#626C7F" className="custom-tab"  /><br></br> */}
                    {/* <Tab text="3.5:1"/>
                    <Tab text="2:5.1"/>
                    <Tab text="5:1"/> */}
                </div>
                <div>
                   
                   <Button buttonText="Submit Answer" onClick={submitBtn} />
                   
                    
                </div>
                </div>
            </div>
            </div>
            
          </div>
    )
}

export default Page