import styled from "styled-components";
import url from "./images/toggle.svg";

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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display:none;
  }
`;

export const ButtonBackground = styled.div`
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius:13px;
  background-color:${({ theme }) => theme.color.mercury};
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
`;

export const LightMode = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: url(${url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px 14px;
  background-color: ${({ theme }) => theme.color.slateGray};
`;