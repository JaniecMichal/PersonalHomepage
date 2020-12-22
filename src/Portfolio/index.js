import React from "react";
import Icon from "./images/GithubBlue.svg";
import ProjectTile from "./ProjectTile";
import Spinner from "./Spinner";
import { HeaderTitle, StyledWrapper, SubTitle, TileContainer } from "./styled";

const Portfolio = ({ loading }) => (
  <StyledWrapper>
    <header>
      <img src={Icon} alt="githubIcon" />
      <HeaderTitle>Portfolio</HeaderTitle>
      <SubTitle>My recent projects</SubTitle>
    </header>
    {!!loading ?
      <TileContainer>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </TileContainer>
      :
      <Spinner />
    }
  </StyledWrapper>
);

export default Portfolio;