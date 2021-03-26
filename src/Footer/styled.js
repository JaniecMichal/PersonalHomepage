import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  justify-self: start;
  align-self: start;
  max-width: 691px;
  text-align: left;
  margin-top: 120px;
`;

export const Caption = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 24px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-bottom: 12px;
  }
`;

export const ContactLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xxxlarge};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 24px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }


  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.normal};
    margin-bottom: 12px;
  }
`;

export const ContactMessage = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin-top: 0px;
  margin-bottom: 56px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.regular};
    margin-bottom: 40px;
  }
`;

export const SocialsContainer = styled.div`
  max-width: 264px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    max-width: 176px;
  }
`;

export const SocialIcon = styled.img`
  width: 48px;
  height: 48px;

  &:hover {
    filter: invert(24%) sepia(97%) saturate(1539%) hue-rotate(195deg)
      brightness(108%) contrast(101%);
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      filter: invert(99%) sepia(100%) saturate(1%) hue-rotate(259deg)
        brightness(107%) contrast(100%);
      &:hover {
        filter: invert(43%) sepia(87%) saturate(3030%) hue-rotate(198deg)
          brightness(101%) contrast(101%);
      }
    `};

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    &:hover {
      filter: none;
    }

    ${({ darkMode }) =>
      darkMode &&
      css`
        &:hover {
          filter: none;
        }
      `};
  }

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    width: 32px;
    height: 32px;
  }
`;
