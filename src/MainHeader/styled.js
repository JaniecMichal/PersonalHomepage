import styled, { css } from "styled-components";
import { ReactComponent as Message } from "./images/Message.svg";

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

export const MyPhoto = styled.img`
  border-radius: 100%;
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
  display: flex;
  max-width: 154px;
  padding: 12px 16px 12px 18px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  margin-top: 0px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    outline: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be,
          2px 2px 0px #6d93be, -2px -2px 0px #6d93be;
      }

      &:active {
        outline: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
      }
    `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.normal};

    &:hover {
      cursor: default;
    }

    ${({ darkMode }) =>
      darkMode &&
      css`
        background-color: ${({ theme }) => theme.colors.primary};
        &:hover {
          cursor: default;
        }
      `};
  }
`;

export const MessageIcon = styled(Message)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  margin-right: 18px;
`;
