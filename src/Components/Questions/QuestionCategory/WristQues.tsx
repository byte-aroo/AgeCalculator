import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
const WristQues = (props:any) => {
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
  useEffect(() => {
    if(props.reset){
      setAnswers(Array(questions.length).fill(null))
    }
    const loggedAnswers: any = sessionStorage.getItem("wrist" || {});
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getWristRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("wrist")]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers :any= [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("wrist", newAnswers);
  };
  function getWristRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "2");
        sessionStorage.setItem("mukherjeeMax", "1");
        sessionStorage.setItem("reddyMax", "2");
        sessionStorage.setItem("swapnilMax", "2");
      } else if (answers[0] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "2");
        sessionStorage.setItem("agarwalMax", "19");
        sessionStorage.setItem("mukherjeeMin", "1");
        sessionStorage.setItem("mukherjeeMax", "20");
        sessionStorage.setItem("reddyMin", "2");
        sessionStorage.setItem("reddyMax", "19");
        sessionStorage.setItem("swapnilMin", "2");
        sessionStorage.setItem("swapnilMax", "19");
      } else if (answers[0] === "Fused") {
        sessionStorage.setItem("agarwalMin", "19");

        sessionStorage.setItem("mukherjeeMin", "19");

        sessionStorage.setItem("reddyMin", "18");

        sessionStorage.setItem("swapnilMin", "18");
      }
    }
    if (answers[1]) {
      if (answers[1] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "6");

        sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "6");

        sessionStorage.setItem("swapnilMax", "5");
      } else if (answers[1] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "6");
        sessionStorage.setItem("agarwalMax", "19");
        sessionStorage.setItem("mukherjeeMin", "10");
        sessionStorage.setItem("mukherjeeMax", "18");
        sessionStorage.setItem("reddyMin", "5");
        sessionStorage.setItem("reddyMax", "18");
        sessionStorage.setItem("swapnilMin", "5");
        sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[1] === "Fused") {
        sessionStorage.setItem("agarwalMin", "19");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "18");

        sessionStorage.setItem("reddyMin", "17");

        sessionStorage.setItem("swapnilMin", "17");
      }
    }
    if (answers[2]) {
      if (answers[2] === "Yes") {
        sessionStorage.setItem("agarwalMin", "1");
        sessionStorage.setItem("mukherjeeMin", "1");

        sessionStorage.setItem("reddyMin", "1");

        sessionStorage.setItem("swapnilMin", "1");
      } 
    }
    if (answers[3]) {
      if (answers[3] === "Yes") {
        sessionStorage.setItem("agarwalMin", "2");
        sessionStorage.setItem("mukherjeeMin", "2");

        sessionStorage.setItem("reddyMin", "2");

        sessionStorage.setItem("swapnilMin", "2");
      } 
    }
    if (answers[4]) {
      if (answers[4] === "Yes") {
        sessionStorage.setItem("agarwalMin", "3");
        sessionStorage.setItem("mukherjeeMin", "3");

        sessionStorage.setItem("reddyMin", "3");

        sessionStorage.setItem("swapnilMin", "3");
      } 
    }
    if (answers[5]) {
      if (answers[5] === "Yes") {
        sessionStorage.setItem("agarwalMin", "4");
        sessionStorage.setItem("mukherjeeMin", "4");

        sessionStorage.setItem("reddyMin", "4");

        sessionStorage.setItem("swapnilMin", "4");
      } 
    }
    if (answers[6]) {
      if (answers[6] === "Yes") {
        sessionStorage.setItem("agarwalMin", "5");
        sessionStorage.setItem("mukherjeeMin", "5");

        sessionStorage.setItem("reddyMin", "5");

        sessionStorage.setItem("swapnilMin", "5");
      } 
    }
    if (answers[7]) {
      if (answers[7] === "Yes") {
        sessionStorage.setItem("agarwalMin", "6");
        sessionStorage.setItem("mukherjeeMin", "6");

        sessionStorage.setItem("reddyMin", "6");

        sessionStorage.setItem("swapnilMin", "6");
      } 
    }
    if (answers[8]) {
      if (answers[8] === "Yes") {
        sessionStorage.setItem("agarwalMin", "7");
        sessionStorage.setItem("mukherjeeMin", "7");

        sessionStorage.setItem("reddyMin", "7");

        sessionStorage.setItem("swapnilMin", "7");
      } 
    }
    if (answers[9]) {
      if (answers[9] === "Yes") {
        sessionStorage.setItem("agarwalMin", "10");
        sessionStorage.setItem("mukherjeeMin", "10");

        sessionStorage.setItem("reddyMin", "10");

        sessionStorage.setItem("swapnilMin", "10");
        sessionStorage.setItem("agarwalMax", "12");
        sessionStorage.setItem("mukherjeeMax", "12");

        sessionStorage.setItem("reddyMax", "12");

        sessionStorage.setItem("swapnilMax", "12");
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
            Wrist Joint
          </Card.Title>

          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question}<button
                    className="option-reset-btn"
                    onClick={() => optionReset(questionIndex, "")}
                  >
                    Reset
                  </button>
                </h5>
                <div className="options">
                  {questionData.options
                    ? questionData.options.map((option, optionIndex) => (
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
