import React from "react";
import {
  LinkCaption,
  LinkContainer,
  StyledLink,
  StyledTile,
  TileDescription,
  TileTitle,
} from "./styled";

const ProjectTile = () => (
  <StyledTile>
    <TileTitle>
      Movie Browser
    </TileTitle>
    <TileDescription>
      Project description, e.g. website where you can search for favourite movies and people.
      Project description, e.g. website where you can search.
    </TileDescription>
    <LinkContainer>
      <LinkCaption>Demo:</LinkCaption>
        <StyledLink
          href="https://link.demo.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://link.demo.com
     </StyledLink>
    </LinkContainer>
    <LinkContainer>
      <LinkCaption>Code:</LinkCaption>
        <StyledLink
          href="https://link.demo.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://link.demo.com
     </StyledLink>
    </LinkContainer>
  </StyledTile>
);

export default ProjectTile;