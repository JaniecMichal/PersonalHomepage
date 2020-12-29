import React from "react";
import { StyledButtonWrapper, ModeText, ButtonBackground, StyledButton, Icon } from "./styled";

const ButtonWraper = ({ darkMode, modeToggler }) => {
  const setMode = () => {
    modeToggler(!darkMode);
  };

  return (
    <StyledButtonWrapper>
      <ModeText darkMode={darkMode}>Dark mode Off</ModeText>
      <ButtonBackground darkMode={darkMode}>
        <StyledButton darkMode={darkMode} onClick={setMode}>
          <Icon darkMode={darkMode} />
        </StyledButton>
      </ButtonBackground>
    </StyledButtonWrapper>
  )
};

export default ButtonWraper;