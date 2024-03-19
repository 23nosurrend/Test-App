import  { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccessNav from "./AccessNav";
import Question from "./Question";
import Tab from "./Tab";
import Button from "./Button";
import Bar from "./Downbar";
import Data from "../assets/json/data.json";

function Page() {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [correctness, setCorrectness] = useState<(boolean | undefined)[]>([]);
  const [buttonText, setButtonText] = useState("Submit Answer");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false); // State to track whether to show "Next Question" button
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
      alert("You have reached the end of the quiz");
    }
  };

  const submitBtn = () => {
    if (selectedTab !== null) {
      const newCorrectness = [...correctness];
      newCorrectness[selectedTab] = realAnswer === option[selectedTab];
      setCorrectness(newCorrectness);
      setButtonText("Next Question");
      setShowNextButton(true); // Show "Next Question" button after submitting
    } else {
      alert("Please select an answer");
    }
  };

  const head: [string, string, string, string] = ["A", "B", "C", "D"];

  return (
    <div>
      <div>
        <AccessNav />
      </div>
      <div className="inner">
        <div className="inner-container">
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
            <div>
              {option.map((answers: string, Tabindex: number) => (
                <div key={Tabindex}>
                  <Tab
                    isSelected={selectedTab === Tabindex}
                    onClick={() => handleTabClick(num, Tabindex)}
                    text={answers}
                    path="/Question"
                    head={head[Tabindex]}
                    backColor="#F4F6FA"
                    textColor="#626C7F"
                    className="custom-tab"
                    isCorrect={correctness[Tabindex]}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
