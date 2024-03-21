import "../styles/Playbtn.css"



interface buttonProps{
    
    onClick?:()=>void;
    
    
}

function  Play({onClick}:buttonProps){
    return(
        <div>
            <div>
                
                <button id="play-btn" onClick={onClick} >
                    Play Again
                </button>
                
                
            </div>

        </div>
    )
}

export default Play