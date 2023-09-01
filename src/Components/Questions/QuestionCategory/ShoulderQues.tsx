import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
import data from "../../Sliders/answers.json";
const ShoulderQues = () => {
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
    loggedAnswers = sessionStorage.getItem("shoulder" || {});

    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getShoulerRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("shoulder")]);

  const handleOptionChange = (
    questionIndex: any,
    optionIndex: any,
    option: any
  ) => {
    const newAnswers: any = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("shoulder", newAnswers);
  };

  function getShoulerRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "19");
        sessionStorage.setItem("mukherjeeMax", "19");
        sessionStorage.setItem("reddyMax", "19");
        sessionStorage.setItem("swapnilMax", "19");
      } else if (answers[0] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "11");
        sessionStorage.setItem("agarwalMax", "25");
        sessionStorage.setItem("mukherjeeMin", "15");
        sessionStorage.setItem("mukherjeeMax", "22");
        sessionStorage.setItem("reddyMin", "18");
        sessionStorage.setItem("reddyMax", "22");
        sessionStorage.setItem("swapnilMin", "15");
        sessionStorage.setItem("swapnilMax", "22");
      } else if (answers[0] === "Fused") {
        sessionStorage.setItem("agarwalMin", "18");

        sessionStorage.setItem("mukherjeeMin", "22");

        sessionStorage.setItem("reddyMin", "20");

        sessionStorage.setItem("swapnilMin", "20");
      }
    }
    if (answers[1]) {
      if (answers[1] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "1");

        sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "11");

        sessionStorage.setItem("swapnilMax", "11");
      } else if (answers[1] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "1");
        sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "10");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "10");
        sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "12");
        sessionStorage.setItem("swapnilMax", "16");
      } else if (answers[1] === "Fused") {
        sessionStorage.setItem("agarwalMin", "15");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "16");

        sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "16");
      }
    }
    if (answers[2]) {
      if (answers[2] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "16");

        sessionStorage.setItem("mukherjeeMax", "17");

        sessionStorage.setItem("reddyMax", "15");

        sessionStorage.setItem("swapnilMax", "14");
      } else if (answers[2] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "16");
        sessionStorage.setItem("agarwalMax", "20");
        sessionStorage.setItem("mukherjeeMin", "14");
        sessionStorage.setItem("mukherjeeMax", "19");
        sessionStorage.setItem("reddyMin", "14");
        sessionStorage.setItem("reddyMax", "18");
        sessionStorage.setItem("swapnilMin", "14");
        sessionStorage.setItem("swapnilMax", "18");
      } else if (answers[2] === "Fused") {
        sessionStorage.setItem("agarwalMin", "20");
        sessionStorage.setItem("mukherjeeMin", "14");

        sessionStorage.setItem("reddyMin", "17");

        sessionStorage.setItem("swapnilMin", "18");
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
        sessionStorage.setItem("agarwalMax", "6");
        sessionStorage.setItem("mukherjeeMin", "1");
        sessionStorage.setItem("mukherjeeMax", "18");
        sessionStorage.setItem("reddyMin", "0.5");
        sessionStorage.setItem("reddyMax", "19");
        sessionStorage.setItem("swapnilMin", "1");
        sessionStorage.setItem("swapnilMax", "5");
      } else if (answers[3] === "Fused") {
        sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "14");

        sessionStorage.setItem("reddyMin", "18");

        sessionStorage.setItem("swapnilMin", "5");
      }
    }

    if (answers[4]) {
      if (answers[4] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "3");

        // sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "3");

        sessionStorage.setItem("swapnilMax", "3");
      } else if (answers[4] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "3");
        sessionStorage.setItem("agarwalMax", "6");
        // sessionStorage.setItem("mukherjeeMin", "");
        sessionStorage.setItem("mukherjeeMax", "4");
        sessionStorage.setItem("reddyMin", "3");
        // sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "3");
        sessionStorage.setItem("swapnilMax", "19");
      } else if (answers[4] === "Fused") {
        sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "2");

        // sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "19");
      }
    }

    if (answers[5]) {
      if (answers[5] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "5");

        // sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "5");

        sessionStorage.setItem("swapnilMax", "5");
      } else if (answers[5] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "5");
        sessionStorage.setItem("agarwalMax", "6");
        // sessionStorage.setItem("mukherjeeMin", "10");
        sessionStorage.setItem("mukherjeeMax", "7");
        sessionStorage.setItem("reddyMin", "5");
        // sessionStorage.setItem("reddyMax", "16");
        sessionStorage.setItem("swapnilMin", "5");
        sessionStorage.setItem("swapnilMax", "19");
      } else if (answers[5] === "Fused") {
        sessionStorage.setItem("agarwalMin", "6");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "5");

        // sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "19");
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
                    <>
                      <label key={optionIndex}>
                        <input
                          className="input-radios"
                          type="radio"
                          value={optionIndex}
                          checked={
                            answers[questionIndex]
                              ? answers[questionIndex] === option
                              : false
                          }
                          onChange={() =>
                            handleOptionChange(
                              questionIndex,
                              optionIndex,
                              option
                            )
                          }
                        />
                        {option}
                      </label>
                    </>
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
