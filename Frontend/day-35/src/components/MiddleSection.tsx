import React from "react";
import Posts from "./posts";
import Stories from "./stories";

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <Stories />
      <Posts />
    </div>
  );
};

export default MiddleSection;
