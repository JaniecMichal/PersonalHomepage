import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top:72px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top:36px;
  }
`;

export const ErrorMessage = styled.p`
  margin-top:23px;
  margin-bottom:0px;
  font-weight:${({ theme }) => theme.fontWeight.bold};
  font-size:${({ theme }) => theme.fontSize.xlarge};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top:12px;
    font-size:${({ theme }) => theme.fontSize.normal};
  }
`;

export const ErrorTip = styled.p`
  margin-top:32px;
  margin-bottom:44px;
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.large};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top:16px;
    margin-bottom:22px;
    font-size:${({ theme }) => theme.fontSize.regular};
  }
`;