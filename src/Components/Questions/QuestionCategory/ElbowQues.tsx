import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
const ElbowQues = () => {
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
    const loggedAnswers: any = sessionStorage.getItem("elbow" || {});

    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getElbowRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("elbow")]);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers:any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("elbow", newAnswers);
  };
  function getElbowRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "5");
        sessionStorage.setItem("mukherjeeMax", "8");
        sessionStorage.setItem("reddyMax", "5");
        sessionStorage.setItem("swapnilMax", "5");
      } else if (answers[0] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "5");
        sessionStorage.setItem("agarwalMax", "16");
        sessionStorage.setItem("mukherjeeMin", "8");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "5");
        sessionStorage.setItem("reddyMax", "17");
        sessionStorage.setItem("swapnilMin", "5");
        sessionStorage.setItem("swapnilMax", "17");
      } else if (answers[0] === "Fused") {
        sessionStorage.setItem("agarwalMin", "16");

        sessionStorage.setItem("mukherjeeMin", "16");

        sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "16");
      }
    }
    if (answers[1]) {
      if (answers[1] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "9");

        sessionStorage.setItem("mukherjeeMax", "13");

        sessionStorage.setItem("reddyMax", "9");

        sessionStorage.setItem("swapnilMax", "9");
      } else if (answers[1] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "9");
        sessionStorage.setItem("agarwalMax", "16");
        sessionStorage.setItem("mukherjeeMin", "11");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMin", "9");
        sessionStorage.setItem("reddyMax", "17");
        sessionStorage.setItem("swapnilMin", "9");
        sessionStorage.setItem("swapnilMax", "17");
      } else if (answers[1] === "Fused") {
        sessionStorage.setItem("agarwalMin", "16");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "17");

        sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "16");
      }
    }
    if (answers[2]) {
      if (answers[2] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "7");

        sessionStorage.setItem("mukherjeeMax", "7");

        sessionStorage.setItem("reddyMax", "7");

        sessionStorage.setItem("swapnilMax", "7");
      } else if (answers[2] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "5");
        sessionStorage.setItem("agarwalMax", "16");
        sessionStorage.setItem("mukherjeeMin", "5");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "6");
        sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "5");
        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[2] === "Fused") {
        sessionStorage.setItem("agarwalMin", "16");
        sessionStorage.setItem("mukherjeeMin", "16");

        sessionStorage.setItem("reddyMin", "14");

        sessionStorage.setItem("swapnilMin", "14");
      }
    }

    if (answers[3]) {
      if (answers[3] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "11");

        sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "11");

        sessionStorage.setItem("swapnilMax", "11");
      } else if (answers[3] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "11");
        // sessionStorage.setItem("agarwalMax", "6");
        sessionStorage.setItem("mukherjeeMin", "11");
        sessionStorage.setItem("mukherjeeMax", "15");
        sessionStorage.setItem("reddyMin", "9");
        sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "9");
        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[3] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "11");

        sessionStorage.setItem("reddyMin", "14");

        sessionStorage.setItem("swapnilMin", "14");
      }
    }

    if (answers[4]) {
      if (answers[4] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "11");

        sessionStorage.setItem("mukherjeeMax", "12");

        sessionStorage.setItem("reddyMax", "11");

        sessionStorage.setItem("swapnilMax", "11");
      } else if (answers[4] === "Appeared but not fused") {
        // sessionStorage.setItem("agarwalMin", "3");
        sessionStorage.setItem("agarwalMax", "11");
        sessionStorage.setItem("mukherjeeMin", "12");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "11");
        sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "10");
        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[4] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "6");
        sessionStorage.setItem("mukherjeeMin", "11");

        sessionStorage.setItem("reddyMin", "14");

        sessionStorage.setItem("swapnilMin", "14");
      }
    }

    if (answers[5]) {
      if (answers[5] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "1");

        // sessionStorage.setItem("mukherjeeMax", "11");

        // sessionStorage.setItem("reddyMax", "5");

        sessionStorage.setItem("swapnilMax", "1");
      } else if (answers[5] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "1");
        // sessionStorage.setItem("agarwalMax", "6");
        // sessionStorage.setItem("mukherjeeMin", "10");
        sessionStorage.setItem("mukherjeeMax", "7");
        // sessionStorage.setItem("reddyMin", "5");
        sessionStorage.setItem("reddyMax", "1");
        sessionStorage.setItem("swapnilMin", "1");
        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[5] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("mukherjeeMin", "5");

        sessionStorage.setItem("reddyMin", "1");

        sessionStorage.setItem("swapnilMin", "14");
      }
    }
  }  function optionReset(questionIndex: any, option: any) {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
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
