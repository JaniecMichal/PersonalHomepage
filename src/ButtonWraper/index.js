import React from "react";
import { StyledButtonWrapper, ModeText, ButtonBackground, StyledButton, LightMode } from "./styled";

const ButtonWraper = () => (
  <StyledButtonWrapper>
    <ModeText>Dark mode Off</ModeText>
    <ButtonBackground>
      <StyledButton>
        <LightMode />
      </StyledButton>
    </ButtonBackground>
  </StyledButtonWrapper>
);

export default ButtonWraper;