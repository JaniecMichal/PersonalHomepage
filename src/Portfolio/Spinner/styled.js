import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 64px;
  grid-column: 1/-1;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top: 32px;
  }
`;

export const LoadingMessage = styled.p`
  margin-bottom: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.large};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;

export const StyledSpinner = styled.img`
  width: 91px;
  height: 91px;
  grid-column: 1/-1;
  margin: 0 auto;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
