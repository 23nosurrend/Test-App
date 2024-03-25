import "../styles/Final.css"
import AccessNav from "./AccessNav"
import Play from "./Playbtn"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import icon1 from "../assets/images/icon-html.svg"
import icon2 from "../assets/images/icon-css.svg"
import icon3 from "../assets/images/icon-js.svg"
import icon4 from "../assets/images/icon-accessibility.svg"
import { useState } from "react"




function Final(){
     const Iconarr=[icon1,icon2,icon3,icon4]
     const Titles=["HTML","CSS","Javascript","Accessibility"]

    const navigate=useNavigate()
    const backHome=()=>{
        navigate("/")
    }
    const param=useParams<{num?:string;count?:string}>()
    const current=parseInt(param.num?? "0")
    const marks=parseInt(param.count??"0")
    const found=Iconarr[current] || Iconarr[0]
    console.log(current)
    const[background,setBackground]=useState("#313E51")

    const changeBackground=()=>{
        setBackground("#FFFFFF")
    }
   
    return(
        <div style={{background}}>
            <div>
               <AccessNav
                title={Titles[current]}
                icon={<img src={found}/>}
                onClick={changeBackground}
               />
            </div>
            <div id="Final-father">
            <div id="Final-child">
            <div id="final-text-div">
                <p id="you-completed">Quiz Completed</p>
                <p id="you-scored">You Scored....</p>
            </div>

           <div> 
            <div id="score-box">
             <div id="category-score">
                <div className="nav-Final">
                <div className="nav-Final-page-icon"><img src={found}></img></div>
                <div className="nav-final-page"><p>{Titles[current]}</p></div>
                </div>
             </div>
                <div id="number-score"><h1>{marks}</h1></div>
                <div id="out-of"> <p>Out of <span>10</span></p></div>
                

            </div>
            <div id="play-btn-div" >
                    <Play onClick={()=>backHome()}/>
                </div>
            </div>
            </div>
            </div>
           
        </div>
    )
}

export default Final