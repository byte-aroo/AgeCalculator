import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
const WristQues = () => {
  const questions = [
    {
      question: "Lower end of radius",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Lower end of ulna",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Carpel Bone",
    },
    {
      question: "1st Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "2nd Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "3rd Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "4th Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "5th Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "6th Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "7th Carpel bone",
      options: ["Yes", "No"],
    },
    {
      question: "8th Carpel bone",
      options: ["Yes", "No"],
    },
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <Card style={{ width: "95%", margin: "auto", marginTop: "1%" }}>
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Wrist Joint
          </Card.Title>

          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question}
                </h5>
                <div className="options">
                  {questionData.options
                    ? questionData.options.map((option, optionIndex) => (
                        <label key={optionIndex}>
                          <input
                            className="input-radios"
                            type="radio"
                            value={optionIndex}
                            checked={answers[questionIndex] === optionIndex}
                            onChange={() =>
                              handleOptionChange(questionIndex, optionIndex)
                            }
                          />
                          {option}
                        </label>
                      ))
                    : ""}
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

export default WristQues;
