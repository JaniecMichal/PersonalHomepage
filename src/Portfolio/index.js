import React from "react";
import ConnectionError from "./ConnectionError";
import Icon from "./images/GithubBlue.svg";
import ProjectTile from "./ProjectTile";
import Spinner from "./Spinner";
import { HeaderTitle, StyledWrapper, SubTitle, TileContainer } from "./styled";

const Portfolio = ({ loading, error }) => {

  const returnCorrectContent = () => {
    if (loading === true) {
      return <Spinner />
    } else if (error === true) {
      return <ConnectionError />
    } else {
      return (
        <TileContainer>
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </TileContainer>
      )
    }
  };

  return (
    <StyledWrapper>
      <header>
        <img src={Icon} alt="githubIcon" />
        <HeaderTitle>Portfolio</HeaderTitle>
        <SubTitle>My recent projects</SubTitle>
      </header>
      {returnCorrectContent()}
    </StyledWrapper>
  )
};

export default Portfolio;