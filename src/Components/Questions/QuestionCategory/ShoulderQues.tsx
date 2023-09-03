import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
import data from "../../Sliders/answers.json";
import { getAnswersRange } from "../answers";
const ShoulderQues = (props: any) => {
  const questions = [
    {
      question: "Medial end of clavivle",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Tip of coracoid",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Tip of acromion",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Head of humerus",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Greater tubercle",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Lesser tubercle",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  let loggedAnswers: any;

  useEffect(() => {

    if (props.reset) {
      setAnswers(Array(questions.length).fill(null));
    }
  }, [props.reset]);
  useEffect(() => {
    loggedAnswers = sessionStorage.getItem("shoulder" || {});
    getAnswersRange();
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getAnswersRange();
    }
  }, [sessionStorage.getItem("shoulder")]);

  const handleOptionChange = (
    question: any,
    questionIndex: any,
    optionIndex: any,
    option: any
  ) => {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("shoulder", newAnswers);
  };

  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("shoulder", newAnswers);
    getAnswersRange();
  }

  return (
    <div>
      <Card
        className="category-card"
        style={{
          width: "95%",
          margin: "auto",
          marginTop: "1%",
          backgroundColor: "#b8e7f7",
        }}
      >
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Shoulder Joint
          </Card.Title>

          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question}
                  <button
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
                          checked={
                            sessionStorage.getItem("shoulder")
                              ? answers[questionIndex]
                                ? answers[questionIndex] === option
                                : false
                              : false
                          }
                          onChange={() =>
                            handleOptionChange(
                              questionData.question,
                              questionIndex,
                              optionIndex,
                              option
                            )
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

      {/* <p></p>
      <p> </p> */}
    </div>
  );
};

export default ShoulderQues;
