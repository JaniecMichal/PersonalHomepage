import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./images/toggleSun.svg";

export const StyledButtonWrapper = styled.div`
  justify-self: end;
  align-self: flex-end;
  margin-bottom: 50px;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline-offset: 8px;
`;

export const ModeText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export const ButtonBackground = styled.div`
  width: 48px;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  padding: 3px;
  border-radius: 13px;
  display: flex;
`;

export const IconWrapper = styled.div`
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ darkMode }) =>
    darkMode &&
    css`
      transform: translate(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
