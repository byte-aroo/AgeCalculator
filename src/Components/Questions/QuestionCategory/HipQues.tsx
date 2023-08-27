import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
const HipQues = () => {
  const questions = [
    {
      question: "Iliac Crest",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Ischial Tuberosity",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Triradiate cartilage",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Head of femur",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Greater trochanter",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Lesser trochanter",
      options: ["Not appeared", "Appeared but not fused","Fused"],
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
      <Card className="category-card" style={{ width: "95%", margin: "auto", marginTop: "1%" }}>
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Hip Joint
          </Card.Title>
         
          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{marginBottom:'1%'}}>
                <h5><BsCaretRightFill/> {questionData.question}</h5>
                <div className="options"  >
                {questionData.options.map((option, optionIndex) => (
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

export default HipQues;
