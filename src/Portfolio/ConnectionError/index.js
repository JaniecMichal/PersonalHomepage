import React from "react";
import Button from "../../Button";
import danger from "./images/Danger.svg";
import { StyledWrapper, ErrorMessage, ErrorTip } from "./styled.js";

const ConnectionError = () => (
  <StyledWrapper>
    <img src={danger} alt="wariningIcon" />
    <ErrorMessage>Ooops! Something went wrong... </ErrorMessage>

    <ErrorTip>Sorry, failed to load Github projects.
    You can check them directly on Github.
    </ErrorTip>
    <Button buttonMessage={"Go to Github"} />
  </StyledWrapper>
);

export default ConnectionError;