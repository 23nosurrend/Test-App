import "../styles/Button.css"



interface buttonProps{
    buttonText:string;
    onClick?:()=>void;
    
    
}

function  Button({buttonText,onClick}:buttonProps){
    return(
        <div>
            <div>
                
                <button id="btn" onClick={onClick} >
                    {buttonText}
                </button>
                
                
            </div>

        </div>
    )
}

export default Button