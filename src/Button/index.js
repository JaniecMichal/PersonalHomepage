import React from "react";
import { MessageIcon, StyledButton } from "./styled";

const Button = ({ buttonMessage, icon }) => (
  <StyledButton>
    {icon ? <MessageIcon /> : ""} {buttonMessage}
  </StyledButton>
);

export default Button;