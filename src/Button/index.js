import React from "react";
import { StyledButton } from "./styled";

const Button = ({ buttonMessage, darkMode }) => (
  <StyledButton darkMode={darkMode}>{buttonMessage}</StyledButton>
);

export default Button;
