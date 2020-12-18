import React from "react";
import Icon from "./images/GithubBlue.svg";
import ProjectTile from "./ProjectTile";
import { HeaderTitle, StyledWrapper, SubTitle, TileContainer } from "./styled";

const Portfolio = () => (
  <StyledWrapper>
    <header>
      <img src={Icon} alt="githubIcon" />
      <HeaderTitle>Portfolio</HeaderTitle>
      <SubTitle>My recent projects</SubTitle>
    </header>
    <TileContainer>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </TileContainer>
  </StyledWrapper>
);

export default Portfolio;