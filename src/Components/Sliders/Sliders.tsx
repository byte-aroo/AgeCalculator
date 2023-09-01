/* eslint-disable react-hooks/exhaustive-deps */
import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Sliders.css";

const Sliders = () => {
  const [agarwalSliderValue, setAgarwalSliderValue] = useState<any>([]);
  const [mukherjeeSliderValue, setMukherjeeSliderValue] = useState<any>([]);
  const [reddySliderValue, setReddySliderValue] = useState<any>([]);
  const [swapnilSliderValue, setSwapnilSliderValue] = useState<any>([]);
const [nanddySliderValue,setNanddySliderValue]=useState<any>([])
  useEffect(() => {
    setAgarwalSliderValue([Number(sessionStorage.getItem('agarwalMin')),Number(sessionStorage.getItem('agarwalMax'))])
   
    setMukherjeeSliderValue([Number(sessionStorage.getItem('mukherjeeMin')),Number(sessionStorage.getItem('mukherjeeMax'))])

    setReddySliderValue([Number(sessionStorage.getItem('reddyMin')),Number(sessionStorage.getItem('reddyMax'))])
    // let range = sessionStorage.getItem("sliders" || {});
    setSwapnilSliderValue([Number(sessionStorage.getItem('swapnilMin')),Number(sessionStorage.getItem('swapnilMax'))])
    setNanddySliderValue([Number(sessionStorage.getItem('nanddyMin')),Number(sessionStorage.getItem('nanddyMax'))])
    // if (range) {
    //   assignRanges(JSON.parse(range));
    // }
  });

  function assignRanges(range: any) {
    setAgarwalSliderValue(range.A);
    setMukherjeeSliderValue(range.M);
    setReddySliderValue(range.R);
    setSwapnilSliderValue(range.S);
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
              value={agarwalSliderValue?agarwalSliderValue:[0,0]}
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
              value={mukherjeeSliderValue?mukherjeeSliderValue:[0,0]}
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
            Reddy (35<sup>th</sup>)
          </Card.Title>

          <Card.Text>
            <Slider
              range
              value={reddySliderValue?reddySliderValue:[0,0]}
              tooltip={{open:true, placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="slider-card"
        style={{ width: "26rem", backgroundColor: "#f1f1f2" }}
      >
        <Card.Body>
          <Card.Title>Nanddy (1<sup>st</sup>)</Card.Title>

          <Card.Text>
            <Slider
              range
              value={nanddySliderValue?nanddySliderValue:[0,0]}
              tooltip={{ open:true,placement: "bottom" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sliders;
