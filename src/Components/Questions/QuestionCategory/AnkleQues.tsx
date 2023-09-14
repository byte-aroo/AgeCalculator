import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
import { getAnswersRange } from "../answers";
const AnkleQues = (props:any) => {
  const questions = [
    {
      question: "Lower end of fibula",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Lower end of tibia",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    // {
    //   question: "upper end of fibula",
    //   options: ["Not appeared", "Appeared but not fused", "Fused"],
    // },
    {
      question: "Calcaneum",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
  ];
  useEffect(() => {

    if (props.reset) {
      setAnswers(Array(questions.length).fill(null));
     
    }
  }, [props.reset]);
  useEffect(() => {
    if(props.reset){
      setAnswers(Array(questions.length).fill(null))
    }
    const loggedAnswers: any = sessionStorage.getItem("ankle" || {});
   
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getAnswersRange()
    }
  }, [sessionStorage.getItem("ankle")]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers :any= [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("ankle", newAnswers);
  };
 
  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("ankle", newAnswers);
    getAnswersRange()
  }
  return (
    <div>
      <Card className="category-card" style={{ width: "95%", margin: "auto", marginTop: "1%" ,backgroundColor:'#b8e7f7'}}>
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Ankle Joint
          </Card.Title>

          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question} <button
                    className="option-reset-btn"
                    onClick={() => optionReset(questionIndex, "")}
                  >
                    Reset
                  </button>
                </h5>
                <div className="options">
                  {questionData.options.map((option, optionIndex) => (
                    <label key={optionIndex}>
                      <input
                        className="input-radios"
                        type="radio"
                        value={optionIndex}
                        checked={ sessionStorage.getItem("ankle")
                        ? answers[questionIndex]
                          ? answers[questionIndex] === option
                          : false
                        : false
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

export default AnkleQues;
