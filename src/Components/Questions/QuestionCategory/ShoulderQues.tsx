import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
const ShoulderQues = () => {
  const questions = [
    {
      question: "Medial end of clavivle",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Tip of coracoid",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Tip of acromion",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Head of humerus",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Greater tubercle",
      options: ["Not appeared", "Appeared but not fused","Fused"],
    },
    {
      question: "Lesser tubercle",
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
      <Card className="category-card" style={{ width: "95%", margin: "auto", marginTop: "1%" ,backgroundColor:'#b8e7f7'}}>
        <Card.Body>
          <Card.Title className="card-title" style={{ fontSize: "2rem" }}>
            Shoulder Joint
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

export default ShoulderQues;
