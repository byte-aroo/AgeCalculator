import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Questions from "./Components/Questions/Questions";
import Sliders from "./Components/Sliders/Sliders";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterFile from "./Components/Footer/FooterFile";
import { Modal } from "antd";
import { Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [reset, setReset] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isAdShown, setIsAdShown] = useState(false);

  const resourceTeam = [
    {
      id: "arijit",
      name: "Dr Arijit Dutta",
      email: "arijitdutta@gmail.com",
      phone: "1234567890",
    },
    {
      id: "darshan",
      name: "Dr Darshan Galoria",
      email: "darshangaloria@gmail.com",
      phone: "1234567890",
    },
    {
      id: "dhara",
      name: "Dr Dhara D. Goswami",
      email: "dharadgoswami@gmail.com",
      phone: "1234567890",
    },
    {
      id: "pradip",
      name: "Dr Pradip Rana",
      email: "pradiprana@gmail.com",
      phone: "1234567890",
    },
    {
      id: "srushti",
      name: "Dr Srushti Shukla",
      email: "srushtishukla@gmail.com",
      phone: "1234567890",
    },
  ];

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function resetAll() {
    sessionStorage.clear();
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 3000);
  }
  console.error = (message) => {
    if (message.startsWith("Warning:")) {
      // Suppress React warnings
      return;
    }
    // For other console errors, log them as usual
    originalError(message);
  };
  
  // Save a reference to the original console.error
  const originalError = console.error;
  return (
    <>
      <div style={{ backgroundColor: "rgb(184 231 247 / 24%)" }}>
        <div className="App">
          <Header setIsModalOpen={setIsModalOpen} />

          <div className="content-container">
            {!isMobile ? (
              <div className="row">
                <div className="column left">
                  <Questions reset={reset} />
                </div>
                <div className="column right">
                  <Sliders />
                </div>
              </div>
            ) : (
              <div className="app-mobile">
                <div className="first-element">
                  <Questions reset={reset} />
                </div>
                <div className="second-element">
                  <Sliders />
                </div>
              </div>
            )}
          </div>
          <button className="reset-all" onClick={resetAll}>
            Reset
          </button>
        </div>
        <FooterFile />
      </div>

      <Modal
        title="Concept and Resource Team"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="ad-modal"
        width="fit-content"
        style={{ zIndex: "1100" }}
      >
        <div className="resource-team-wrapper">
          <div className="resource-team">
            {resourceTeam.slice(0, 3).map((user: any, index: any) => (
              <Card
                key={index}
                className="info-card"
                style={{ width: "10rem", border: "none" }}
              >
                <Card.Img
                  variant="top"
                  className="info-card-img"
                  src={`${process.env.PUBLIC_URL}/profile/${user.id}.jpg`}
                />
                <div className="info-details">
                  <p className="info-card-name">
                    <b>{user.name}</b>
                  </p>

                  <p className="info-card-phone">
                    <b>Phone:</b> {user.phone}
                  </p>
                  <p className="info-card-email">
                    <b>Email:</b> {user.email}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="rest-resource-team">
            {resourceTeam.slice(3).map((user: any, index: any) => (
              <Card
                key={index}
                className="info-card"
                style={{ width: "10rem", border: "none" }}
              >
                <Card.Img
                  variant="top"
                  className="info-card-img"
                  src={`${process.env.PUBLIC_URL}/profile/${user.id}.jpg`}
                />
                <div className="info-details">
                  <p className="info-card-name">
                    <b>{user.name}</b>
                  </p>

                  <p className="info-card-phone">
                    <b>Phone:</b> {user.phone}
                  </p>
                  <p className="info-card-email">
                    <b>Email:</b> {user.email}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;

// <a href="https://www.linkedin.com/company/bytearoo/">
// <img className="modal-logo" src="/logo/bytearoo-logo.png" alt="logo" />
// </a>
// <div className="modal-text">
// <p>
//   <b>This page is maintained and developed by ByteAroo.</b>
// </p>
// <p className="text-connect">
//   {" "}
//   <b>To Connect : </b>
//   <p>
//     <b>LinkedIn:</b> https://www.linkedin.com/company/bytearoo/
//   </p>
//   <p>
//     <b>Email:</b> bytearoo@gmail.com
//   </p>
//   <p>
//     <b>WhatsApp:</b> +91 6375-874079
//   </p>
// </p>
// </div>
