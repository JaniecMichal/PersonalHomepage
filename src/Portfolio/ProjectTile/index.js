import React from "react";
import {
  LinkCaption,
  LinkContainer,
  StyledLink,
  StyledTile,
  TileDescription,
  TileTitle,
} from "./styled";

const ProjectTile = ({ darkMode, title, description, demoLink, codeLink }) => {
  return (
    <StyledTile darkMode={darkMode} >
      <TileTitle darkMode={darkMode}>
        {title}
      </TileTitle>
      <TileDescription darkMode={darkMode}>
        {description}
      </TileDescription>
      {!!demoLink &&
        <LinkContainer>
         <LinkCaption darkMode={darkMode}>Demo:</LinkCaption>
          <StyledLink
            href={demoLink}
            target="_blank"
            rel="noreferrer noopener"
            darkMode={darkMode}
          >
            {demoLink}
          </StyledLink>
        </LinkContainer>
      }
      <LinkContainer>
        <LinkCaption darkMode={darkMode}>Code:</LinkCaption>
        <StyledLink
          href={codeLink}
          target="_blank"
          rel="noreferrer noopener"
          darkMode={darkMode}
        >
          {codeLink}
        </StyledLink>
      </LinkContainer>
    </StyledTile>
  )
};

export default ProjectTile;