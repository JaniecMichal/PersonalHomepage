import styled from "styled-components";

export const StyledFooter = styled.footer`
  justify-self:start;
  align-self:start;
  max-width:691px;
  text-align:left;
  margin-top:120px;
`;

export const Caption = styled.span`
  display:block;
  font-size:${({ theme }) => theme.fontSize.small};
  font-weight:${({ theme }) => theme.fontWeight.bold};
  color:${({ theme }) => theme.color.slateGray};
  margin-bottom:24px;
  text-transform:uppercase;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin-bottom:12px;
  }
`;

export const ContactLink = styled.a`
  display:block;
  font-size:${({ theme }) => theme.fontSize.xxxlarge};
  font-weight:${({ theme }) => theme.fontWeight.black};
  color:${({ theme }) => theme.color.mineShaft};
  margin-bottom:24px;
  text-decoration:none;

  &:hover{
    color:${({ theme }) => theme.color.scienceBlue};
  }

  &:visited{
    color:${({ theme }) => theme.color.mineShaft};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    &:hover{
      color:${({ theme }) => theme.color.mineShaft};
    }

    &:visited{
      color:${({ theme }) => theme.color.mineShaft};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.normal};
    margin-bottom:12px;
  }
`;

export const ContactMessage = styled.p`
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.normal};
  color:${({ theme }) => theme.color.mineShaft};
  margin-top:0px;
  margin-bottom:56px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size:${({ theme }) => theme.fontSize.regular};
    margin-bottom:40px;
  }
`;

export const SocialsContainer = styled.div`
  max-width:264px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:nowrap;

  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    max-width:176px;
  }
`;

export const SocialIcon = styled.img`
  width:48px;
  height:48px;

    &:hover{
      filter:invert(47%) sepia(58%) saturate(4738%) hue-rotate(198deg) brightness(102%) contrast(101%);
    }
    
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
      
      &:hover{
        filter:none;
      }

    }

    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
      width:32px;
      height:32px;
    }
`;