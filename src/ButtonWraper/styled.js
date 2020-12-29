import styled, { css } from "styled-components";
import lightIcon from "./images/toggle.svg";
import darkIcon from "./images/toggleDM.svg";

export const StyledButtonWrapper = styled.div`
  justify-self:end;
  align-self: flex-end;
  display:flex;
  flex-flow: row wrap;
  justify-content:flex-end;
  align-items:center;
  margin-bottom:50px;
`;

export const ModeText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color:${({ theme }) => theme.color.slateGray};
  font-weight:${({ theme }) => theme.fontWeight.bold};
  text-transform:uppercase;
  margin-right:12px;

  ${({ darkMode }) => darkMode && css`
    color:${({ theme }) => theme.color.white};
  `};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display:none;
  }
`;

export const ButtonBackground = styled.div`
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius:13px;
  background-color:${({ theme }) => theme.color.mercury};

  ${({ darkMode }) => darkMode && css`
    background-color: ${({ theme }) => theme.color.lightShaft};
    border: 1px solid ${({ theme }) => theme.color.white};
  `};
`;

export const StyledButton = styled.button`
  width: 48px;
  height: 26px;
  background-color:${({ theme }) => theme.color.mercury};
  border: 1px solid ${({ theme }) => theme.color.slateGray};
  border-radius: 13px;
  outline: none;
  padding: 3px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  ${({ darkMode }) => darkMode && css`
    background-color: ${({ theme }) => theme.color.lightShaft};
    border:none;
  `};
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: url(${lightIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px 14px;
  background-color: ${({ theme }) => theme.color.slateGray};

  ${({ darkMode }) => darkMode && css`
    background-image: url(${darkIcon});
    background-color: ${({ theme }) => theme.color.white};
    transition: all 0.1s linear;
    transform: translate(25px);
  `};
`;