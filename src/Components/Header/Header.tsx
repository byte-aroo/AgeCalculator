// import React from "react";
// import "./Header.css";
// const Header = (props: any) => {
//   return (
//     <div className="header-title">
//       <p>Age Range Calculator</p>
//       <div className="team-info-heading">
//         <button
//           className="team-info-btn"
//           onClick={() => props.setIsModalOpen(true)}
//         >
//           {" "}
//           Concept and Resource Team
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Define styled components
const HeaderTitle = styled.div`
  text-align: center;
`;

const TitleText = styled.p`
  color: #403c57;
  font-weight: bolder;
  font-size: 3rem;
`;

const TeamInfoHeading = styled.div`
  margin-left: 80%;
  margin-top: -4%;
  margin-bottom: 4%;
`;

const TeamInfoButton = styled.button`
margin-left: 80%;
  margin-top: -2%;
  margin-bottom: 1%;
  border: 0.5px solid black;
  background: none;
  background-color: rgba(184, 231, 247);
  color: black;
  border-radius: 5px;
`;
const TeamInquiryButton = styled.button`
margin-left: 87.5%;
  margin-top: -10%%;
  margin-bottom: 4%;
  border: 0.5px solid black;
  background: none;
  background-color: rgba(184, 231, 247);
  color: black;
  border-radius: 5px;
`;
// Create your responsive React component
const Header = (props: any) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (!isFormOpen) {
        setIsFormOpen(true);
      }
    }, 5000);
  }, []);
  const handleFormCancel = () => {
    setIsFormOpen(false);
  };
  return (
    <>
    
    <div>
      <HeaderTitle>
        <TitleText>Age Range Calculator</TitleText>
      </HeaderTitle>
      {/* <TeamInfoHeading>Your Team Info Heading</TeamInfoHeading> */}
      <TeamInfoButton onClick={() => props.setIsModalOpen(true)}>Concept and Resource Team</TeamInfoButton>
      <TeamInquiryButton className="inquiry-form" onClick={() => setIsFormOpen(true)}>
            Inquiry Form
          </TeamInquiryButton>
    </div>
    
    
    <Modal
        title="Inquiry Form"
        open={isFormOpen}
        // onOk={handleOk}
        onCancel={handleFormCancel}
        footer={null}
        className="form-modal"
        // width="max-content"
        // style={{ overflow: "hidden" }}
      >
        <iframe
          src="https://forms.gle/jWtTMg3XVXsG7zuY7"
          className="google-form"
          name="myIFrame"
          style={{ height: "90vh" }}
        ></iframe>
      </Modal>
    </>
    
  );
};

export default Header;
