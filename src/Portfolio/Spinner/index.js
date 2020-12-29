import React from "react";
import spinner from "./images/spinner.svg";
import { StyledWrapper, StyledSpinner, LoadingMessage } from "./styled";

const Spinner = ({ darkMode }) => {
  return <StyledWrapper>
    <LoadingMessage darkMode={darkMode}>Please wait, project are being loading…</LoadingMessage>
    <StyledSpinner src={spinner} alt="loading" />
  </StyledWrapper>;
};

export default Spinner;
