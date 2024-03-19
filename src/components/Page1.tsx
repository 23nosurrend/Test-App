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

function Page() {
    const [selectedTab, setSelectedTab] = useState<number | null>(null);
    const [correctness, setCorrectness] = useState<(boolean | undefined)[]>([]);
    const navigate = useNavigate();
  
    const handleTabClick = (index: number, indexTab: number) => {
      navigate(`/question/${index}`);
      setSelectedTab(indexTab);
    };
  
    const param = useParams<{ index?: string }>();
    let num: number;
    if (param.index) {
      num = parseInt(param.index);
    } else {
      num = 0;
    }
  
    const category = Data.quizzes[num];
    const firstQuestion = category.questions[0];
    const option = firstQuestion.options;
    const realAnswer: string = firstQuestion.answer;
  
    const submitBtn = () => {
      if (selectedTab !== null) {
        const newCorrectness = [...correctness];
        newCorrectness[selectedTab] = realAnswer === option[selectedTab];
        setCorrectness(newCorrectness);
      } else {
        alert("please select answer");
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
                  first={1}
                  last={category.questions.length}
                  question={firstQuestion.question}
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
                <Button buttonText="Submit Answer" onClick={submitBtn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 export default Page 