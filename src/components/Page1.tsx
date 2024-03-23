import  { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccessNav from "./AccessNav";
import Question from "./Question";
import Tab from "./Tab";
import Button from "./Button";
import Bar from "./Downbar";
import Data from "../assets/json/data.json";
import "../styles/Page.css"
import icon1 from "../assets/images/icon-html.svg"
import icon2 from "../assets/images/icon-css.svg"
import icon3 from "../assets/images/icon-js.svg"
import icon4 from "../assets/images/icon-accessibility.svg"
 
import correctIcon from "../assets/images/icon-correct.svg"
import incorrectIcon from "../assets/images/icon-incorrect.svg"

function Page() {
    



  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [correctness, setCorrectness] = useState<(boolean | undefined)[]>([]);
  const [buttonText, setButtonText] = useState("Submit Answer");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false); // State to track whether to show "Next Question" button
  const [please,setPlease]=useState("")
  const [pleaseIcon,setPleaseIcon]=useState<string>("")
  //const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const navigate = useNavigate();
  const param = useParams<{ index?: string }>();
  const num = parseInt(param.index ?? "0");

  const category = Data.quizzes[num];
  const questions = category.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const option = currentQuestion.options;
  const realAnswer = currentQuestion.answer;

  useEffect(() => {
    setSelectedTab(null);
    setCorrectness([]);
    setButtonText("Submit Answer");
    setShowNextButton(false); // Reset to hide "Next Question" button
    

  }, [num]);



  const handleTabClick = (index: number, indexTab: number) => {
    navigate(`/question/${index}`);
    setSelectedTab(indexTab);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowNextButton(false); // Reset to hide "Next Question" button
      setSelectedTab(null); // Reset selectedTab for the new question
      setCorrectness([]); // Reset correctness for the new question
      setButtonText("Submit Answer"); // Reset button text
      
    } else {
        navigate("/final")
      
    }
  };

  const submitBtn = () => {
    if (selectedTab !== null) {
      const newCorrectness = [...correctness];
      const selectedAnswerIndex = selectedTab;
      const isCorrect = realAnswer === option[selectedAnswerIndex];
      newCorrectness[selectedAnswerIndex] = isCorrect;
      
      // Find the index of the correct answer
      const correctAnswerIndex = option.findIndex((answer) => answer === realAnswer);
      if (correctAnswerIndex !== -1) {
        // Update the correctness for the correct answer tab
        newCorrectness[correctAnswerIndex] = true;
      }
      
      setCorrectness(newCorrectness);
      setButtonText("Next Question");
      setShowNextButton(true); // Show "Next Question" button after submitting
      
    } else {
        setPleaseIcon(incorrectIcon)
        setPlease("Please Select an Answer")
        
    }
  };

  const head: [string, string, string, string] = ["A", "B", "C", "D"];
  const Iconarr=[icon1,icon2,icon3,icon4]
  const found=Iconarr[num] || Iconarr[0]
  return (
    <div >
      <div>
        <AccessNav icon={<img src={found}/>}/>
      </div>
      <div className="page-inner">
        <div className="inner-container" >
          <div id="div-of-Question-Bar">
            <div id="Question-div">
              <Question
                first={currentQuestionIndex + 1}
                last={questions.length}
                question={currentQuestion.question}
              />
            </div>
            <div id="div-with-Bar">
              <Bar />
            </div>
          </div>
          <div>
            <div id="div-answer">
            {option.map((answers: string, Tabindex: number) => (
  <div key={Tabindex}>
    <Tab
      isSelected={selectedTab === Tabindex}
      onClick={() => handleTabClick(num, Tabindex)}
      text={answers}
      path="/"
      head={head[Tabindex]}
      backColor="#F4F6FA"
      textColor="#626C7F"
      className="custom-tab"
      isCorrect={correctness[Tabindex]}
      // Show correct icon only for the correct answer
      svg2={selectedTab === Tabindex && correctness[Tabindex] !== undefined ? (correctness[Tabindex] ? <img src={correctIcon} alt="Correct" /> : <img src={incorrectIcon} alt="Incorrect" />) : null}
    />
    <br />
  </div>
))}

            </div>
            <div>
              <Button
                buttonText={showNextButton ? "Next Question" : buttonText}
                onClick={showNextButton ? handleNextQuestion : submitBtn}
              />
              <div id="please-select">
                <div> <img id="please-select-img"src={pleaseIcon}></img></div>
                <div><p>{please}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
