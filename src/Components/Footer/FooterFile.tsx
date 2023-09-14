import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";
import "./FooterFile.css";

const FooterFile = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div className="footer">
          <a
            href="https://www.linkedin.com/company/bytearoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer-logo"
              src={`${process.env.PUBLIC_URL}/logo/bytearoo-logo.png`}
              alt="logo"
            />
          </a>
          <div className="footer-text">
            <p>
              <b>This page is maintained and developed by ByteAroo.</b>
            </p>
            <div className="footer-text-connect">
              <b>To Connect:</b>
              <ul>
                <li>
                  <b>Website:</b>{" "}
                  <a
                    href="https://www.bytearoo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bytearoo.com
                  </a>
                </li>
                <li>
                  <b>LinkedIn:</b>{" "}
                  <a
                    href="https://www.linkedin.com/company/bytearoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/company/bytearoo/
                  </a>
                </li>
                <li>
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:bytearoo@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bytearoo@gmail.com
                  </a>
                </li>
                <li>
                  <b>WhatsApp:</b>{" "}
                  <a
                    href="https://wa.me/916375874079"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 6375-874079
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MDBFooter>
  );
};

export default FooterFile;
