import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
const AnkleQues = () => {
  const questions = [
    {
      question: "Lower end of fibula",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "lower end of tibia",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "upper end of fibula",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
    {
      question: "Calcaneum",
      options: ["Not appeared", "Appeared but not fused", "Fused"],
    },
  ];
  useEffect(() => {
    const loggedAnswers: any = sessionStorage.getItem("ankle" || {});
   
    if (loggedAnswers) {
      setAnswers(loggedAnswers.split(","));
      getAnkleRange(loggedAnswers);
    }
  }, [sessionStorage.getItem("ankle")]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleOptionChange = (questionIndex: any, optionIndex: any,option:any) => {
    const newAnswers :any= [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
    sessionStorage.setItem("ankle", newAnswers);
  };
  function getAnkleRange(chosenAnswers: any) {
    const answers = chosenAnswers.split(",");

    if (answers[0]) {
      if (answers[0] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "1");
        // sessionStorage.setItem("mukherjeeMax", "1");
        sessionStorage.setItem("reddyMax", "1");
        sessionStorage.setItem("swapnilMax", "1");
      } else if (answers[0] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "1");
        sessionStorage.setItem("agarwalMax", "17");
        // sessionStorage.setItem("mukherjeeMin", "0");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "1");
        sessionStorage.setItem("reddyMax", "17");
        sessionStorage.setItem("swapnilMin", "1");
        sessionStorage.setItem("swapnilMax", "17");
      } else if (answers[0] === "Fused") {
        sessionStorage.setItem("agarwalMin", "17");

        sessionStorage.setItem("mukherjeeMin", "16");

        sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "16");
      }
    }
    if (answers[1]) {
      if (answers[1] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "1");

        // sessionStorage.setItem("mukherjeeMax", "11");

        sessionStorage.setItem("reddyMax", "1");

        sessionStorage.setItem("swapnilMax", "1");
      } else if (answers[1] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "1");
        sessionStorage.setItem("agarwalMax", "17");
        // sessionStorage.setItem("mukherjeeMin", "1");
        sessionStorage.setItem("mukherjeeMax", "17");
        sessionStorage.setItem("reddyMin", "1");
        sessionStorage.setItem("reddyMax", "17");
        sessionStorage.setItem("swapnilMin", "1");
        sessionStorage.setItem("swapnilMax", "17");
      } else if (answers[1] === "Fused") {
        sessionStorage.setItem("agarwalMin", "17");
        // sessionStorage.setItem("agarwalMax", "15");
        sessionStorage.setItem("mukherjeeMin", "14");

        sessionStorage.setItem("reddyMin", "16");

        sessionStorage.setItem("swapnilMin", "16");
      }
    }
    if (answers[2]) {
      if (answers[2] === "Not appeared") {
        sessionStorage.setItem("agarwalMax", "4");

        // sessionStorage.setItem("mukherjeeMax", "17");

        sessionStorage.setItem("reddyMax", "4");

        sessionStorage.setItem("swapnilMax", "4");
      } else if (answers[2] === "Appeared but not fused") {
        sessionStorage.setItem("agarwalMin", "4");
        sessionStorage.setItem("agarwalMax", "18");
        // sessionStorage.setItem("mukherjeeMin", "14");
        sessionStorage.setItem("mukherjeeMax", "16");
        sessionStorage.setItem("reddyMin", "4");
        sessionStorage.setItem("reddyMax", "19");
        sessionStorage.setItem("swapnilMin", "4");
        sessionStorage.setItem("swapnilMax", "19");
      } else if (answers[2] === "Fused") {
        sessionStorage.setItem("agarwalMin", "18");
        sessionStorage.setItem("mukherjeeMin", "11");

        sessionStorage.setItem("reddyMin", "18");

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
            Ankle Joint
          </Card.Title>

          <Card.Text className="card-questions">
            {questions.map((questionData, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "1%" }}>
                <h5>
                  <BsCaretRightFill /> {questionData.question} <button
                    className="option-reset-btn"
                    onClick={() => optionReset(questionIndex, "")}
                  >
                    Reset
                  </button>
                </h5>
                <div className="options">
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

export default AnkleQues;
