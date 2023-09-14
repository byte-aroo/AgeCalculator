/* eslint-disable react-hooks/exhaustive-deps */
import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Sliders.css";

const Sliders = (props: any) => {
  const [agarwalSliderValue, setAgarwalSliderValue] = useState<any>([]);
  const [mukherjeeSliderValue, setMukherjeeSliderValue] = useState<any>([]);
  const [reddySliderValue, setReddySliderValue] = useState<any>([]);
  const [swapnilSliderValue, setSwapnilSliderValue] = useState<any>([]);
  const [nanddySliderValue, setNanddySliderValue] = useState<any>([]);

  useEffect(() => {
    if (props.reset) {
      setAgarwalSliderValue([0, 100]);
      setMukherjeeSliderValue([0, 100]);
      setReddySliderValue([0, 100]);
      setSwapnilSliderValue([0, 100]);
      setNanddySliderValue([0, 100]);
    }
  }, [props.reset]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Retrieve the value from sessionStorage and update the state
      const updatedSessionData = sessionStorage.getItem("answers");
      if (updatedSessionData) {
        assignRanges(JSON.parse(updatedSessionData));
      }
    }, 1000); // Adjust the interval time (in milliseconds) as needed

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // E

  function assignRanges(range: any) {
    setAgarwalSliderValue([range.agarwalMin, range.agarwalMax]);
    setMukherjeeSliderValue([range.mukherjeeMin, range.mukherjeeMax]);
    setReddySliderValue([range.reddyMin, range.reddyMax]);
    setSwapnilSliderValue([range.swapnilMin, range.swapnilMax]);
    setNanddySliderValue([range.nanddyMin, range.nanddyMax]);
  }

  return (
    <div className="sliders-wrapper">
      <p>The age range of the patient according to different authors</p>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="slider-values">
              <div className="slider-value">
                <label>Min Age:</label>
                <input type="text" value={agarwalSliderValue[0]} readOnly />
              </div>
              <div className="slider-name">
                <p style={{ fontWeight: "bold" }}>
                  Aggarwal (2<sup>nd</sup>)
                </p>
              </div>
              <div className="slider-value">
                <label>Max Age:</label>
                <input type="text" value={agarwalSliderValue[1]} readOnly />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="slider-values">
              <div className="slider-value">
                <label>Min Age:</label>
                <input type="text" value={mukherjeeSliderValue[0]} readOnly />
              </div>
              <div className="slider-name">
                <p style={{ fontWeight: "bold" }}>
                  J B Mukherjee (4<sup>th</sup>)
                </p>
              </div>
              <div className="slider-value">
                <label>Max Age:</label>
                <input type="text" value={mukherjeeSliderValue[1]} readOnly />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", height: "9rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="slider-values">
              <div className="slider-value">
                <label>Min Age:</label>
                <input type="text" value={reddySliderValue[0]} readOnly />
              </div>
              <div className="slider-name">
                <p style={{ fontWeight: "bold" }}>
                  Reddy (35<sup>th</sup>)
                </p>
              </div>
              <div className="slider-value">
                <label>Max Age:</label>
                <input type="text" value={reddySliderValue[1]} readOnly />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="slider-values">
              <div className="slider-value">
                <label>Min Age:</label>
                <input type="text" value={swapnilSliderValue[0]} readOnly />
              </div>
              <div className="slider-name">
                <p style={{ fontWeight: "bold" }}>Swapnil Sir</p>
              </div>
              <div className="slider-value">
                <label>Max Age:</label>
                <input type="text" value={swapnilSliderValue[1]} readOnly />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="slider-values">
              <div className="slider-value">
                <label>Min Age:</label>
                <input type="text" value={nanddySliderValue[0]} readOnly />
              </div>
              <div className="slider-name">
                <p style={{ fontWeight: "bold" }}>
                  Nanddy (1<sup>st</sup>)
                </p>
              </div>
              <div className="slider-value">
                <label>Max Age:</label>
                <input type="text" value={nanddySliderValue[1]} readOnly />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sliders;
