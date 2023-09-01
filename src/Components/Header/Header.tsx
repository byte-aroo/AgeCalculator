import React from "react";
import "./Header.css";
const Header = (props: any) => {
  return (
    <div className="header-title">
      <p>Age Range Calculator</p>
      <div className="team-info-heading">
        <button
          className="team-info-btn"
          onClick={() => props.setIsModalOpen(true)}
        >
          {" "}
          Concept and Resource Team
        </button>
      </div>
    </div>
  );
};

export default Header;
