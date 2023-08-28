import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
const DentalPerm = () => {
  const questions = [
    {
      question: "1st molar",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Central Incisor",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Lateral Incisor",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "1st premolar",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "2nd premolar",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "Canine",
      options: ["Appeared", "Not appeared"],
    },
    {
      question: "2nd molar",
      options: ["Appeared", "Not appeared"],
    },
    {
        question: "3rd molar",
        options: ["Appeared", "Not appeared"],
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
            Dental Examination
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted card-sub-title"
            style={{ fontSize: "1.2rem" }}
          >
            Permaneny Tooth 
          </Card.Subtitle>
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

export default DentalPerm;
