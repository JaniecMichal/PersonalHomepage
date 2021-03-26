import styled from "styled-components";

export const StyledWrapper = styled.section`
  width:100%;
  margin-top:72px;
  text-align:center;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top:48px;
  }
`;

export const HeaderTitle = styled.h3`
  font-weight:${({ theme }) => theme.fontWeight.black};
  font-size:${({ theme }) => theme.fontSize.xxlarge};
  margin-top:12px;
  margin-bottom:8px;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.normal};
  }
`;

export const SubTitle = styled.p`
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.large};
  margin-top:0px;
  margin-bottom:24px;
`;

export const TileContainer = styled.section`
  width:100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  justify-items:center;
  grid-gap:32px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns:repeat(1,auto);
  }
`;