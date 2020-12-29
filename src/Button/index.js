import React from "react";
import { MessageIcon, StyledButton } from "./styled";

const Button = ({ buttonMessage, icon, darkMode }) => (
  <StyledButton darkMode={darkMode}>
    {icon ? <MessageIcon darkMode={darkMode} /> : ""} {buttonMessage}
  </StyledButton>
);

export default Button;