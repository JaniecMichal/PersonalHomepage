import React from "react";
import {
  LinkCaption,
  LinkContainer,
  StyledLink,
  StyledTile,
  TileDescription,
  TileTitle,
} from "./styled";

const ProjectTile = ({ darkMode }) => {
  return (
    <StyledTile darkMode={darkMode} >
      <TileTitle darkMode={darkMode}>
        Movie Browser
      </TileTitle>
      <TileDescription darkMode={darkMode}>
        Project description, e.g. website where you can search for favourite movies and people.
        Project description, e.g. website where you can search.
      </TileDescription>
      <LinkContainer>
        <LinkCaption darkMode={darkMode}>Demo:</LinkCaption>
        <StyledLink
          href="https://link.demo.com"
          target="_blank"
          rel="noreferrer noopener"
          darkMode={darkMode}
        >
          https://link.demo.com
       </StyledLink>
      </LinkContainer>
      <LinkContainer>
        <LinkCaption darkMode={darkMode}>Code:</LinkCaption>
        <StyledLink
          href="https://link.demo.com"
          target="_blank"
          rel="noreferrer noopener"
          darkMode={darkMode}
        >
          https://link.demo.com
       </StyledLink>
      </LinkContainer>
    </StyledTile>
  )
};

export default ProjectTile;