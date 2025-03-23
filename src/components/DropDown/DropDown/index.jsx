import React from "react";
import { StyledDropDown } from "./DropDown.styles";

const DropDown = ({ isOpen, top, toggleDropdown, button, children }) => {
  return (
    <StyledDropDown $isOpen={isOpen} $top={top}>
      <div onClick={toggleDropdown}>{button}</div>
      <div className="dropDown">{children}</div>
    </StyledDropDown>
  );
};

export default DropDown;
