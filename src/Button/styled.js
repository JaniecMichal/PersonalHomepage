import styled, { css } from "styled-components";
import message from "./images/Message.svg";

export const StyledButton = styled.button`
  display:flex;
  padding:12px 16px;
  font-size:${({ theme }) => theme.fontSize.large};
  font-weight:${({ theme }) => theme.fontWeight.regular};
  background-color:${({ theme }) => theme.color.scienceBlue};
  color:${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  margin-top:0px;

  &:hover{
    cursor: pointer;
    background-color:${({ theme }) => theme.color.dodgerBlue};
  }

  &:focus{
    outline:1px solid rgba(209, 213, 218, 0.3);
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
  }

  &:active{
    outline:1px solid rgba(209, 213, 218, 0.3);
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    background-color:${({ theme }) => theme.color.scienceBlue};
  }

  ${({ darkMode }) => darkMode && css`
    background-color:${({ theme }) => theme.color.dodgerBlue};

      &:hover{
        cursor: pointer;
        background-color:${({ theme }) => theme.color.scienceBlue};
      };

      &:focus{
        outline:1px solid rgba(209, 213, 218, 0.3);
        box-shadow: 2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE;
      };

      &:active{
        background-color:${({ theme }) => theme.color.dodgerBlue};
        outline:1px solid rgba(209, 213, 218, 0.3);
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
      }
  `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.normal};

    &:hover{
      cursor: default;
      background-color:${({ theme }) => theme.color.scienceBlue};
   }

   ${({ darkMode }) => darkMode && css`
      &:hover{
        cursor: default;
        background-color:${({ theme }) => theme.color.dodgerBlue};
      };
  `};
  }
`;

export const MessageIcon = styled.span`
  width:20px;
  height:20px;
  background-image:url(${message});
  color:${({ theme }) => theme.color.white};
  margin-right:18px;
`;
