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
import React from 'react';
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
  margin-bottom: 4%;
  border: 0.5px solid black;
  background: none;
  background-color: rgba(184, 231, 247);
  color: black;
  border-radius: 5px;
`;

// Create your responsive React component
const Header = (props: any) => {
  return (
    <div>
      <HeaderTitle>
        <TitleText>Age Range Calculator</TitleText>
      </HeaderTitle>
      {/* <TeamInfoHeading>Your Team Info Heading</TeamInfoHeading> */}
      <TeamInfoButton onClick={() => props.setIsModalOpen(true)}>Concept and Resource Team</TeamInfoButton>
    </div>
  );
};

export default Header;
