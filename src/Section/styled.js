import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin-top: 72px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.colors.sectionBackground};
    `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-top: 64px;
  } ;
`;

export const SectionHeader = styled.header`
  display: flex;
  border-bottom: 2px solid rgba(209, 213, 218, 0.3);
  align-items: center;
  align-content: center;
`;

export const SectionHeaderTitle = styled.h2`
  margin-right: 16px;
  margin-bottom: 15px;
  margin-top: 0px;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;

export const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 13px;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    width: 18px;
    height: 18px;
  }
`;

export const Skills = styled.ul`
  padding-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  display: grid;
  grid-template-columns: repeat(3, auto);
  line-height: 1.4;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: repeat(2, auto);
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    grid-template-columns: repeat(1, auto);
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;
export const Skill = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const Circle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
`;
