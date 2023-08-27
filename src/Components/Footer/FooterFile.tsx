import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'
import './FooterFile.css'
const FooterFile = () => {
  return (
    <MDBFooter
    bgColor="light"
    className="text-center text-lg-start text-muted"
  >
    <div
      className="text-center p-2"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
     
      <div className="footer">
        <a href="https://www.linkedin.com/company/bytearoo/">
          <img
            className="footer-logo"
            src="/bytearoo-logo.png"
            alt="logo"
          />
        </a>
        <div className="footer-text">
          <p>
            <b>This page is maintained and developed by ByteAroo.</b>
          </p>
          <p className="footer-text-connect">
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
      </div>
     
    </div>
  </MDBFooter>
  )
}

export default FooterFile