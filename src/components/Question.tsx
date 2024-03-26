import "../styles/Question.css"

interface count{
    first:number;
    last:number;
    question:string;
    questionTextclass?:string;
    questionTitleClass?:string
}

function Question({first,last,question,questionTitleClass,questionTextclass}:count){
    return(
        <div>
           <div className="text-title-Question"><h4 className={questionTitleClass}>Question <span>{first}</span> of <span>{last}</span></h4></div>
           <div className="Question-text-div" ><p className={questionTextclass}>
                 {question}
                </p>
          </div>
        </div>
    )
}

export default Question