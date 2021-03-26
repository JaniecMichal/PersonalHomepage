import styled, { css } from "styled-components";

export const StyledTile = styled.article`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  text-align: left;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
        0px 16px 58px rgba(9, 10, 51, 0.03);
      border: 6px solid rgba(209, 213, 218, 0.1);

      &:hover {
        border: 6px solid rgba(3, 102, 214, 0.5);
      }
    `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    padding: 24px;

    &:hover {
      border: 6px solid rgba(209, 213, 218, 0.3);
    }

    ${({ darkMode }) =>
      darkMode &&
      css`
        &:hover {
          border: 6px solid rgba(209, 213, 218, 0.1);
        }
      `};
  }
`;

export const TileTitle = styled.header`
  margin-bottom: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.regular};
    margin-bottom: 16px;
  }
`;

export const TileDescription = styled.p`
  margin-top: 0px;
  margin-bottom: 24px;
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.regular};
    margin-bottom: 16px;
  }
`;

export const LinkContainer = styled.div`
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 55px 145px;
  grid-gap: 8px;
`;

export const LinkCaption = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.normal};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

export const StyledLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;
