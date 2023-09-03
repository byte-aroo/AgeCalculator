/* eslint-disable react-hooks/exhaustive-deps */
import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Sliders.css";

const Sliders = (props:any) => {
  const [agarwalSliderValue, setAgarwalSliderValue] = useState<any>([]);
  const [mukherjeeSliderValue, setMukherjeeSliderValue] = useState<any>([]);
  const [reddySliderValue, setReddySliderValue] = useState<any>([]);
  const [swapnilSliderValue, setSwapnilSliderValue] = useState<any>([]);
  const [nanddySliderValue, setNanddySliderValue] = useState<any>([]);
  
  useEffect(() => {

    if (props.reset) {
      setAgarwalSliderValue([0,0]);
      setMukherjeeSliderValue([0,0]);
      setReddySliderValue([0,0]);
      setSwapnilSliderValue([0,0]);
      setNanddySliderValue([0,0]);
    }
  }, [props.reset]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Retrieve the value from sessionStorage and update the state
      const updatedSessionData = sessionStorage.getItem("answers");
      if(updatedSessionData){
        assignRanges(JSON.parse(updatedSessionData))
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
          <Card.Title>
            Aggarwal (2<sup>nd</sup>)
          </Card.Title>

          <Card.Text>
            <Slider
              range
              value={agarwalSliderValue ? agarwalSliderValue : [0, 0]}
              tooltip={{ open:true,placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Title>
            J B Mukherjee (4<sup>th</sup>)
          </Card.Title>

          <Card.Text>
            <Slider
              range
              value={mukherjeeSliderValue ? mukherjeeSliderValue : [0, 0]}
              tooltip={{ open: true, placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Title>
            Reddy (35<sup>th</sup>)
          </Card.Title>

          <Card.Text>
            <Slider
              range
              value={reddySliderValue ? reddySliderValue : [0, 0]}
              tooltip={{ open: true, placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Title>Swapnil Sir </Card.Title>

          <Card.Text>
            <Slider
              range
              value={swapnilSliderValue ? swapnilSliderValue : [0, 0]}
              tooltip={{ open: true, placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Title>
            Nanddy (1<sup>st</sup>)
          </Card.Title>

          <Card.Text>
            <Slider
              range
              value={nanddySliderValue ? nanddySliderValue : [0, 0]}
              tooltip={{ open: true, placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sliders;
