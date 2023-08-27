import { Slider } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import './Sliders.css'

const Sliders = () => {
  return (
    <div className="sliders-wrapper">
        <p>The age range of the patient according to different authors</p>
      <Card className="slider-card"  style={{ width: "26rem",backgroundColor:'#f1f1f2'}}>
        <Card.Body>
       
          <Card.Title>Aggarwal (2<sup>nd</sup>)</Card.Title>
          
          <Card.Text>
          <Slider range defaultValue={[20, 50]} tooltip={{ placement:'bottom'}} />
        
          </Card.Text> 
          
        </Card.Body>
      </Card>
      <Card  className="slider-card" style={{ width: "26rem",backgroundColor:'#f1f1f2'}}>
        <Card.Body>
       
          <Card.Title>J B Mukherjee (4<sup>th</sup>)</Card.Title>
          
          <Card.Text>
          
        <Slider range defaultValue={[20, 50]} tooltip={{ placement:'bottom' }}  />
          </Card.Text> 
          
        </Card.Body>
      </Card>
      <Card  className="slider-card" style={{ width: "26rem",backgroundColor:'#f1f1f2'}}>
        <Card.Body>
       
          <Card.Title>Reddy (35<sup>th</sup>)</Card.Title>
          
          <Card.Text>
          
        <Slider range defaultValue={[20, 50]} tooltip={{ placement:'bottom' }} />
          </Card.Text> 
          
        </Card.Body>
      </Card>
      <Card  className="slider-card" style={{ width: "26rem",backgroundColor:'#f1f1f2'}}>
        <Card.Body>
       
          <Card.Title>Swapnil Sir</Card.Title>
          
          <Card.Text>
          
        <Slider range defaultValue={[20, 50]} tooltip={{ placement:'bottom' }} />
          </Card.Text> 
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sliders;
