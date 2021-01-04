import styled, { css } from "styled-components";

export const StyledTile = styled.article`
  max-width:592px;
  background-color:${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding:56px;
  text-align:left;

  &:hover{
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    padding:24px;

    &:hover{
    border: 6px solid rgba(209, 213, 218, 0.3);
    }
  }

  ${({ darkMode }) => darkMode && css`
    background-color: ${({ theme }) => theme.color.lightShaft};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border: 6px solid rgba(209, 213, 218, 0.1);

      &:hover{
        border: 6px solid rgba(3, 102, 214, 0.5);
      }

  `};
`;

export const TileTitle = styled.header`
  margin-bottom:24px;
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:${({ theme }) => theme.fontSize.xlarge};
  color:${({ theme }) => theme.color.scienceBlue};

  ${({ darkMode }) => darkMode && css`
    color:${({ theme }) => theme.color.white};
  `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.regular};
    margin-bottom:16px;
  }
`;

export const TileDescription = styled.p`
  margin-top:0px;
  margin-bottom:24px;
  line-height:1.4;
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.normal};
  color:${({ theme }) => theme.color.slateGray};

  ${({ darkMode }) => darkMode && css`
    color:${({ theme }) => theme.color.white};
  `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.regular};
    margin-bottom:16px;
  }
`;

export const LinkContainer = styled.div`
  margin-bottom:8px;
  display:grid;
  grid-template-columns: 55px 145px;
  grid-gap:8px;
`;

export const LinkCaption = styled.span`
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.normal};
  color:${({ theme }) => theme.color.slateGray};

  ${({ darkMode }) => darkMode && css`
    color:${({ theme }) => theme.color.white};
  `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.regular};
  }
`;

export const StyledLink = styled.a`
  border-bottom:1px solid ${({ theme }) => theme.color.scienceBlue};
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.normal};
  color:${({ theme }) => theme.color.scienceBlue};
  text-decoration:none;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &:focus{
    color:${({ theme }) => theme.color.dodgerBlue};
    border-bottom:1px solid ${({ theme }) => theme.color.dodgerBlue};
  };

  ${({ darkMode }) => darkMode && css`
    color:${({ theme }) => theme.color.dodgerBlue};

    &:focus{
      color:${({ theme }) => theme.color.scienceBlue};
      border-bottom:1px solid ${({ theme }) => theme.color.scienceBlue};
    }
  `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.regular};

    &:focus{
      color:${({ theme }) => theme.color.scienceBlue};
      border-bottom:1px solid ${({ theme }) => theme.color.scienceBlue};
    };

    ${({ darkMode }) => darkMode && css`
      &:focus{
        color:${({ theme }) => theme.color.dodgerBlue};
        border-bottom:1px solid ${({ theme }) => theme.color.dodgerBlue};
      }
  `};
  }
`;