import React, { useState } from "react";
import LoginPage from "../member-pages/LoginPage";
import MemberPage from "../member-pages/MemberPage";
import OfficerPage from "../member-pages/OfficerPage";
import "../../styles/member-view.css";

const PrivateView = ({ switchView }) => {
  const [member, setMember] = useState({
    memberId: "",
    role: "",
  });

  const renderPage = () => {
    switch (member.role) {
      case "officer":
        return <OfficerPage memberId={member.memberId} />;
      case "member":
        return <MemberPage memberId={member.memberId} />;
      default:
        return <LoginPage setMember={setMember} />;
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <button id="home-portal-button" onClick={switchView}>
        Home Page
      </button>
      {renderPage()}
    </div>
  );
};

export default PrivateView;
