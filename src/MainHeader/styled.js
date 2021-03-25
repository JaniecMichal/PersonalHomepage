import styled, { css } from "styled-components";
import me from "./images/Me.jpg";

export const StyledHeader = styled.header`
  max-width: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 384px) 2fr;
  grid-template-rows: minmax(100px, 384px);
  grid-gap: 66px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, minmax(100px, auto));
    align-items: start;
    grid-gap: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
  }
`;

export const MyPhoto = styled.div`
  padding-top: 100%;
  border-radius: 50%;
  background-image: url(${me});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Caption = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const HeaderTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.theLargest};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 0px;
  margin-bottom: 35px;

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: ${({ theme }) => theme.colors.body.text};
    `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

export const MyDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 0px;
  margin-bottom: 32px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
`;
