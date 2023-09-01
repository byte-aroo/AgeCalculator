import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {BsCaretRightFill} from 'react-icons/bs'
const HipQues = (props:any) => {
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
  useEffect(() => {
    if(props.reset){
      setAnswers(Array(questions.length).fill(null))
    }
    const loggedAnswers: any = sessionStorage.getItem("hip" || {});
  
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getHipRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("hip")]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers :any= [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("hip", newAnswers);
  };
  function getHipRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "14");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMax", "14");
        sessionStorage.setItem("swapnilMax", "14");
      } else if (answers[0] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "14");
        sessionStorage.setItem("agarwalMax", "20");
        sessionStorage.setItem("mukherjeeMin", "17");
        sessionStorage.setItem("mukherjeeMax", "20");
        sessionStorage.setItem("reddyMin", "14");
        sessionStorage.setItem("reddyMax", "21");
        sessionStorage.setItem("swapnilMin", "14");
        sessionStorage.setItem("swapnilMax", "20");
      } else if (answers[0] === "Fused") {
        sessionStorage.setItem("agarwalMin", "20");

        sessionStorage.setItem("mukherjeeMin", "19");

        sessionStorage.setItem("reddyMin", "20");

        sessionStorage.setItem("swapnilMin", "19");
      }
    }
    if (answers[1]) {
      if (answers[1] === "Not appeared") {
        // sessionStorage.setItem("agarwalMax", "1");

        sessionStorage.setItem("mukherjeeMax", "18");

        sessionStorage.setItem("reddyMax", "16");

        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[1] === "Appeared but not fused") {
        // sessionStorage.setItem("agarwalMin", "1");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "16");
        sessionStorage.setItem("mukherjeeMax", "20");
        sessionStorage.setItem("reddyMin", "16");
        sessionStorage.setItem("reddyMax", "21");
        sessionStorage.setItem("swapnilMin", "16");
        sessionStorage.setItem("swapnilMax", "21");
      } else if (answers[1] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "15");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "20");

        sessionStorage.setItem("reddyMin", "21");

        sessionStorage.setItem("swapnilMin", "21");
      }
    }
    if (answers[2]) {
      if (answers[2] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "13");

        // sessionStorage.setItem("mukherjeeMax", "17");

        sessionStorage.setItem("reddyMax", "13");

        // sessionStorage.setItem("swapnilMax", "14");
      } else if (answers[2] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "13");
        sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "16");
        // sessionStorage.setItem("mukherjeeMax", "19");
        sessionStorage.setItem("reddyMin", "13");
        sessionStorage.setItem("reddyMax", "15");
        sessionStorage.setItem("swapnilMin", "15");
        // sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[2] === "Fused") {
        sessionStorage.setItem("agarwalMin", "15");
        sessionStorage.setItem("mukherjeeMin", "15");

        sessionStorage.setItem("reddyMin", "15");

        sessionStorage.setItem("swapnilMin", "14");
      }
    }

    if (answers[3]) {
      if (answers[3] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "1");

        sessionStorage.setItem("mukherjeeMax", "1");

        sessionStorage.setItem("reddyMax", "1");

        sessionStorage.setItem("swapnilMax", "1");
      } else if (answers[3] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "1");
        sessionStorage.setItem("agarwalMax", "17");
        sessionStorage.setItem("mukherjeeMin", "1");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMin", "0.5");
        sessionStorage.setItem("reddyMax", "18");
        sessionStorage.setItem("swapnilMin", "1");
        sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[3] === "Fused") {
        sessionStorage.setItem("agarwalMin", "17");
        sessionStorage.setItem("mukherjeeMin", "16");

        sessionStorage.setItem("reddyMin", "17");

        sessionStorage.setItem("swapnilMin", "18");
      }
    }

    if (answers[4]) {
      if (answers[4] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "4");

        // sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "4");

        sessionStorage.setItem("swapnilMax", "4");
      } else if (answers[4] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "4");
        // sessionStorage.setItem("agarwalMax", "6");
        // sessionStorage.setItem("mukherjeeMin", "");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMin", "4");
        sessionStorage.setItem("reddyMax", "18");
        sessionStorage.setItem("swapnilMin", "4");
        sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[4] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "15");

        sessionStorage.setItem("reddyMin", "17");

        sessionStorage.setItem("swapnilMin", "18");
      }
    }

    if (answers[5]) {
      if (answers[5] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "4");

        // sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "4");

        sessionStorage.setItem("swapnilMax", "4");
      } else if (answers[5] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "4");
        // sessionStorage.setItem("agarwalMax", "6");
        // sessionStorage.setItem("mukherjeeMin", "10");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMin", "4");
        sessionStorage.setItem("reddyMax", "18");
        sessionStorage.setItem("swapnilMin", "4");
        sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[5] === "Fused") {
        // sessionStorage.setItem("agarwalMin", "6");
        sessionStorage.setItem("mukherjeeMin", "15");

        sessionStorage.setItem("reddyMin", "17");

        sessionStorage.setItem("swapnilMin", "18");
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
            Hip Joint
          </Card.Title>
         
          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{marginBottom:'1%'}}>
                <h5><BsCaretRightFill/> {questionData.question}</h5>  <button
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

export default HipQues;
