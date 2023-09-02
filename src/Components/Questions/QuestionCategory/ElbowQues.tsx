import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
import { getAnswersRange } from "../answers";
const ElbowQues = (props:any) => {
  const questions = [
    {
      question: "Upper end of radius",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Upper end of ulna",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Medial epicondyle",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Trochlea",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Lateral epicondyle",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Capitulum",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    
  ];
  useEffect(() => {
    if(props.reset){
      setAnswers(Array(questions.length).fill(null))
    }
    const loggedAnswers: any = sessionStorage.getItem("elbow" || {});

    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
    getAnswersRange()
    }
  }, [sessionStorage.getItem("elbow")]);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers:any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("elbow", newAnswers);
  };
 
  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("elbow", newAnswers);
    getAnswersRange()
  }
  return (
    <div>
      <Card className="category-card" style={{ width: "95%", margin: "auto", marginTop: "1%" ,backgroundColor:'#b8e7f7'}}>
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Elbow Joint
          </Card.Title>
         
          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{marginBottom:'1%'}}>
                <h5><BsCaretRightFill/> {questionData.question}</h5><button
                    className="option-reset-btn"
                    onClick={() => optionReset(questionIndex, "")}
                  >
                    Reset
                  </button>
                <div className="options"  >
                {questionData.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                    className="input-radios"
                      type="radio"
                      value={optionIndex}
                      checked={answers[questionIndex]?
                       answers[questionIndex] === option:false
                      }
                      onChange={() =>
                        handleOptionChange(questionIndex, optionIndex,option)
                      }
                    />
                    {option}
                  </label>
                ))}
                </div>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>

      <p></p>
      <p> </p>
    </div>
  );
};

export default ElbowQues;
