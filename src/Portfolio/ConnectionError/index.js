import React from "react";
import Button from "../../Button";
import danger from "./images/Danger.svg";
import { StyledWrapper, ErrorMessage, ErrorTip, StyledImg } from "./styled.js";

const ConnectionError = ({ darkMode }) => (
  <StyledWrapper>
    <StyledImg src={danger} alt="wariningIcon" darkMode={darkMode} />
    <ErrorMessage darkMode={darkMode}>Ooops! Something went wrong... </ErrorMessage>

    <ErrorTip darkMode={darkMode}>Sorry, failed to load Github projects.
    You can check them directly on Github.
    </ErrorTip>
    <Button buttonMessage={"Go to Github"} darkMode={darkMode} />
  </StyledWrapper>
);

export default ConnectionError;