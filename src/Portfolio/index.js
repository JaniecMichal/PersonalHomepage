import React from "react";
import ConnectionError from "./ConnectionError";
import Icon from "./images/GithubBlue.svg";
import ProjectTile from "./ProjectTile";
import Spinner from "./Spinner";
import { HeaderTitle, StyledWrapper, SubTitle, TileContainer } from "./styled";

const Portfolio = ({ loading, error, darkMode }) => {

  const returnCorrectContent = () => {
    if (loading === true) {
      return <Spinner darkMode={darkMode} />
    } else if (error === true) {
      return <ConnectionError darkMode={darkMode} />
    } else {
      return (
        <TileContainer>
          <ProjectTile darkMode={darkMode} />
          <ProjectTile darkMode={darkMode} />
          <ProjectTile darkMode={darkMode} />
          <ProjectTile darkMode={darkMode} />
        </TileContainer>
      )
    }
  };

  return (
    <StyledWrapper>
      <header>
        <img src={Icon} alt="githubIcon" />
        <HeaderTitle darkMode={darkMode}>Portfolio</HeaderTitle>
        <SubTitle darkMode={darkMode}>My recent projects</SubTitle>
      </header>
      {returnCorrectContent()}
    </StyledWrapper>
  )
};

export default Portfolio;