import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="Icon" />;
    case "cross":
      return <FaTimes className="Icon" />;
    default:
      return <FaPen className="Icon" />;
  }
};
export default Icon;
