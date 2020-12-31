import React from "react";
import ConnectionError from "./ConnectionError";
import Icon from "./images/GithubBlue.svg";
import ProjectTile from "./ProjectTile";
import Spinner from "./Spinner";
import { HeaderTitle, StyledWrapper, SubTitle, TileContainer } from "./styled";

const Portfolio = ({ loading, error, darkMode, repositories }) => {
  const returnCorrectContent = () => {
    if (loading === true) {
      return <Spinner darkMode={darkMode} />
    } else if (error === true) {
      return <ConnectionError darkMode={darkMode} />
    } else {
      return (
        <TileContainer>
          {
            !!repositories && repositories.filter(({ name }) => name !== "JaniecMichal").map(repository =>
              <ProjectTile
                darkMode={darkMode}
                key={repository.id}
                title={repository.name}
                description={repository.description}
                demoLink={repository.homepage}
                codeLink={repository.html_url}
              />
            )
          }
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