import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Questions from "./Components/Questions/Questions";
import Sliders from "./Components/Sliders/Sliders";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterFile from "./Components/Footer/FooterFile";
import { Modal } from "antd";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isAdShown, setIsAdShown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (window.scrollY > 80) {
        if (currentScrollPosition > prevScrollPosition) {
          showModal(window.scrollY);
        }
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);
  const showModal = (height: any) => {
    const isAdShownOnce = localStorage.getItem("adShown" || {});

    if (height > 200 && height < 300) {
      if (!isAdShown) {
        // if (!isAdShownOnce) {
        setIsModalOpen(true);
        setIsAdShown(true);
        // localStorage.setItem("adShown", "true");
        // }
      }
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ backgroundColor: "rgb(184 231 247 / 24%)" }}>
      <div className="App">
        <Header />

        <div className="row">
          <div className="column left">
            <Questions />
          </div>
          <div className="column right">
            <Sliders />
          </div>
        </div>
      </div>
      <FooterFile />
      <Modal
        title="Developer"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="ad-modal"
      >
        {/* <div className="footer"> */}
        <a href="https://www.linkedin.com/company/bytearoo/">
          <img className="modal-logo" src="/bytearoo-logo.png" alt="logo" />
        </a>
        <div className="modal-text">
          <p>
            <b>This page is maintained and developed by ByteAroo.</b>
          </p>
          <p className="text-connect">
            {" "}
            <b>To Connect : </b>
            <p>
              <b>LinkedIn:</b> https://www.linkedin.com/company/bytearoo/
            </p>
            <p>
              <b>Email:</b> bytearoo@gmail.com
            </p>
            <p>
              <b>WhatsApp:</b> +91 6375-874079
            </p>
          </p>
        </div>
        {/* </div> */}
      </Modal>
    </div>
  );
}

export default App;
