import React from "react";
import { FiPaperclip } from "react-icons/fi";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FiPaperclip style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Start your research here!</span>
      </div>
    </>
  );
}

export default LandingPage;
