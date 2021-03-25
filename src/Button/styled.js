import styled, { css } from "styled-components";
import { ReactComponent as Message } from "./images/Message.svg";

export const StyledButton = styled.button`
  display: flex;
  padding: 12px 16px;
  align-items: center;
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
