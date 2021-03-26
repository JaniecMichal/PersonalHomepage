import React from "react";
import {
  StyledButtonWrapper,
  ModeText,
  ButtonBackground,
  StyledButton,
  Icon,
  IconWrapper,
} from "./styled";

const ButtonWraper = ({ darkMode, modeToggler }) => {
  const setMode = () => {
    modeToggler(!darkMode);
  };

  return (
    <StyledButtonWrapper>
      <StyledButton darkMode={darkMode} onClick={setMode}>
        <ModeText darkMode={darkMode}>Dark mode Off</ModeText>
        <ButtonBackground>
          <IconWrapper darkMode={darkMode}>
            <Icon />
          </IconWrapper>
        </ButtonBackground>
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default ButtonWraper;
