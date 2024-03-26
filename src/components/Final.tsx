import "../styles/Final.css"
import AccessNav from "./AccessNav"
import Play from "./Playbtn"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import icon1 from "../assets/images/icon-html.svg"
import icon2 from "../assets/images/icon-css.svg"
import icon3 from "../assets/images/icon-js.svg"
import icon4 from "../assets/images/icon-accessibility.svg"
import lightImage  from "../assets/images/pattern-background-desktop-light.svg"
import darkImage from "../assets/images/pattern-background-desktop-dark.svg"
import {useState} from "react"





function Final(){
     const Iconarr=[icon1,icon2,icon3,icon4]
     const Titles=["HTML","CSS","Javascript","Accessibility"]
     const [isLightBackground,setBackgroundColor]=useState(true)
     const [backgroundImage,setBackgroundImage]=useState(true)

    const navigate=useNavigate()
    const backHome=()=>{
        navigate("/")
    }
    const param=useParams<{num?:string;count?:string}>()
    const current=parseInt(param.num?? "0")
    const marks=parseInt(param.count??"0")
    const found=Iconarr[current] || Iconarr[0]
    console.log(current)
    

    const changeBackground=()=>{
  



       if(isLightBackground){
        document.body.style.backgroundColor="#313E51"
        document.body.style.backgroundImage=`url(${darkImage})`
        
       
       }else{
        document.body.style.backgroundColor="#ffffff"
        document.body.style.backgroundImage=`url(${lightImage})`
        
        
       }
       setBackgroundColor(!isLightBackground)
       setBackgroundImage(!backgroundImage)
       
    }
   
     const contentThemeClass=isLightBackground?"light":"dark"
     const scoreBoxbackground=isLightBackground?"scoreboxWhite":"scoreboxDark"
    return(
        <div >
            <div>
               <AccessNav
                navTextClass={contentThemeClass}
                title={Titles[current]}
                icon={<img src={found}/>}
                onClick={changeBackground}
               />
            </div>
            <div id="Final-father">
            <div id="Final-child">
            <div id="final-text-div" className={contentThemeClass}>
                <p id="you-completed">Quiz Completed</p>
                <p id="you-scored" className={contentThemeClass}>You Scored....</p>
            </div>

           <div> 
            <div id="score-box" className={scoreBoxbackground}>
             <div id="category-score">
                <div className="nav-Final">
                <div className="nav-Final-page-icon"><img src={found}></img></div>
                <div className="nav-final-page"><p className={contentThemeClass} >{Titles[current]}</p></div>
                </div>
             </div>
                <div id="number-score"><h1 className={contentThemeClass}>{marks}</h1></div>
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