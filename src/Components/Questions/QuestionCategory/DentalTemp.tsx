import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
import { getAnswersRange } from "../answers";
const DentalTemp = (props:any) => {
  const questions = [
    {
      question: "Central incisor(Lower)",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Central Incisor(Upper)",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Lateral Incisor(Upper)",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Lateral Incisor (Lower)",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "1st temporary molar",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Canines",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "2nd temporary molar",
      options: ["Appeared", "Not appeared"],
    },
  ];
  useEffect(() => {
    if(props.reset){
      setAnswers(Array(questions.length).fill(null))
    }
    const loggedAnswers: any = sessionStorage.getItem("dentalTemp" || {});

    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getAnswersRange()
    }
  }, [sessionStorage.getItem("dentalTemp")]);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (
    questionIndex: any,
    optionIndex: any,
    option: any
  ) => {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("dentalTemp", newAnswers);
  };
  
  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("dentalTemp", newAnswers);
    getAnswersRange()
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
            Dental Examination
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted card-sub-title"
            style={{ fontSize: "1.2rem" }}
          >
            Temporary Tooth (if present, any)
          </Card.Subtitle>
          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question}
                </h5>{" "}
                <button
                  className="option-reset-btn"
                  onClick={() => optionReset(questionIndex, "")}
                >
                  Reset
                </button>
                <div className="options">
                  {questionData.options.map((option, optionIndex) => (
                    <label key={optionIndex}>
                      <input
                        className="input-radios"
                        type="radio"
                        value={optionIndex}
                        checked={
                          sessionStorage.getItem("dentalTemp")
                              ? answers[questionIndex]
                                ? answers[questionIndex] === option
                                : false
                              : false
                        }
                        onChange={() =>
                          handleOptionChange(questionIndex, optionIndex, option)
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

export default DentalTemp;
