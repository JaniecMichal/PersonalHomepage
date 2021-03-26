import React from "react";
import { socialsData } from "./socialsData";
import { mailAddress } from "../mailAddress";
import {
  ContactMessage,
  Caption,
  ContactLink,
  SocialIcon,
  SocialsContainer,
  StyledFooter,
} from "./styled";

const Footer = ({ darkMode }) => (
  <StyledFooter>
    <Caption darkMode={darkMode}>Let's talk!</Caption>
    <ContactLink
      darkMode={darkMode}
      href={`mailto:${mailAddress}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      michal.janiec95@gmail.com
    </ContactLink>
    <ContactMessage darkMode={darkMode}>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me. 🖐
    </ContactMessage>
    <SocialsContainer>
      {socialsData.map((social) => {
        return (
          <a
            href={social.profileLink}
            target="_blank"
            rel="noreferrer noopener"
            key={social.profileLink}
          >
            <SocialIcon
              src={social.socialIcon}
              alt={social.socialName}
              darkMode={darkMode}
            />
          </a>
        );
      })}
    </SocialsContainer>
  </StyledFooter>
);

export default Footer;
