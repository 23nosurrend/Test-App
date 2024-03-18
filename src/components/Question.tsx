import "../styles/Question.css"

interface count{
    first:number;
    last:number;
    question:string
}

function Question({first,last,question}:count){
    return(
        <div>
           <div className="text-title-Question"><h4>Question <span>{first}</span> of <span>{last}</span></h4></div>
           <div className="Question-text-div"><p>
                 {question}
                </p>
          </div>
        </div>
    )
}

export default Question