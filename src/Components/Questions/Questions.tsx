import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Questions.css";
import ShoulderQues from "./QuestionCategory/ShoulderQues";
import ElbowQues from "./QuestionCategory/ElbowQues";
import WristQues from "./QuestionCategory/WristQues";
import HipQues from "./QuestionCategory/HipQues";
import KneeQues from "./QuestionCategory/KneeQues";
import AnkleQues from "./QuestionCategory/AnkleQues";
import DentalTemp from "./QuestionCategory/DentalTemp";
import DentalPerm from "./QuestionCategory/DentalPerm";

const Questions = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const itemList = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleIndex = (index: any) => {
    setCurrentIndex(index);
  };
  const handleNext = () => {
    setCurrentIndex((prev: any) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentIndex((prev: any) => prev - 1);
  };

  return (
    <div className="questions-wrapper">
      <div className="questions-card">
        {currentIndex === 0 ? (
          <ShoulderQues />
        ) : currentIndex === 1 ? (
          <ElbowQues />
        ) : currentIndex === 2 ? (
          <WristQues />
        ) : currentIndex === 3 ? (
          <HipQues />
        ) : currentIndex === 4 ? (
          <KneeQues />
        ) : currentIndex === 5 ? (
          <AnkleQues />
        ) : currentIndex === 6 ? (
          <DentalTemp />
        ) : currentIndex === 7 ? (
          <DentalPerm />
        ) : (
          <ShoulderQues />
        )}
      </div>

      <div className="pagination-wrapper">
        <Pagination>
          <Pagination.Prev onClick={handlePrev} disabled={currentIndex <= 0} />

          {itemList.map((item: any, index) => (
            <Pagination.Item
              activeLabel=""
              active={currentIndex === index ? true : false}
              onClick={() => handleIndex(index)}
            >
              {item}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={handleNext}
            disabled={currentIndex + 1 >= itemList.length}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Questions;
