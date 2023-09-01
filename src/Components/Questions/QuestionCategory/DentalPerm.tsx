import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const loggedAnswers: any = sessionStorage.getItem("dentalPerm" || {});
  
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getDentalPermRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("dentalPerm")]);
  
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers:any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("dentalPerm", newAnswers);
  };
  function getDentalPermRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "6");

        sessionStorage.setItem("mukherjeeMin", "6");

        sessionStorage.setItem("reddyMin", "6");
        sessionStorage.setItem("nanddylMin", "6");
        sessionStorage.setItem("swapnilMin", "6");
    
      }
    }
    if (answers[1]) {
      if (answers[1] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "7");

        sessionStorage.setItem("mukherjeeMin", "7");

        sessionStorage.setItem("reddyMin", "6");
        sessionStorage.setItem("nanddylMin", "7");
        sessionStorage.setItem("swapnilMin", "7");
    
      }
    }
    if (answers[2]) {
      if (answers[2] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "8");

        sessionStorage.setItem("mukherjeeMin", "8");

        sessionStorage.setItem("reddyMin", "7");
        sessionStorage.setItem("nanddylMin", "8");
        sessionStorage.setItem("swapnilMin", "8");
    
      }
    }
    if (answers[3]) {
      if (answers[3] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "9");

        sessionStorage.setItem("mukherjeeMin", "9");

        sessionStorage.setItem("reddyMin", "9");
        sessionStorage.setItem("nanddylMin", "9");
        sessionStorage.setItem("swapnilMin", "9");
    
      }
    }
    
    if (answers[4]) {
      if (answers[4] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "10");

        sessionStorage.setItem("mukherjeeMin", "10");

        sessionStorage.setItem("reddyMin", "10");
        sessionStorage.setItem("nanddylMin", "10");
        sessionStorage.setItem("swapnilMin", "10");
    
      }
    }if (answers[5]) {
      if (answers[5] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "11");

        sessionStorage.setItem("mukherjeeMin", "11");

        sessionStorage.setItem("reddyMin", "11");
        sessionStorage.setItem("nanddylMin", "11");
        sessionStorage.setItem("swapnilMin", "11");
    
      }
    }
    if (answers[6]) {
      if (answers[6] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "12");

        sessionStorage.setItem("mukherjeeMin", "12");

        sessionStorage.setItem("reddyMin", "12");
        sessionStorage.setItem("nanddylMin", "12");
        sessionStorage.setItem("swapnilMin", "12");
    
      }
    }
    if (answers[7]) {
      if (answers[7] === "Appeared") {
        // sessionStorage.setItem("agarwalMin", "24");

        // sessionStorage.setItem("mukherjeeMin", "20");

        // sessionStorage.setItem("reddyMin", "20");
        // sessionStorage.setItem("nanddylMin", "20");
        sessionStorage.setItem("swapnilMin", "14");
    
      }
    }
    if (answers[8]) {
      if (answers[8] === "Appeared") {
        sessionStorage.setItem("agarwalMin", "18");

        sessionStorage.setItem("mukherjeeMin", "17");

        sessionStorage.setItem("reddyMin", "17");
        sessionStorage.setItem("nanddylMin", "17");
        sessionStorage.setItem("swapnilMin", "17");
    
      }
    }
    
  }
  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  }
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

export default DentalPerm;
