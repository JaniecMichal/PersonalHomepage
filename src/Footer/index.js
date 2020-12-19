import React from "react";
import fbIcon from "./images/facebookIcon.svg";
import ghIcon from "./images/githubIcon.svg";
import inIcon from "./images/instagramIcon.svg";
import liIcon from "./images/linkedinIcon.svg";
import { ContactMessage, Caption, ContactLink, SocialIcon, SocialsContainer, StyledFooter } from "./styled";

const Footer = () => (
  <StyledFooter>
    <Caption>Let's talk!</Caption>
    <ContactLink
      href="michal.janiec95@gmail.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      michal.janiec95@gmail.com
      </ContactLink>
    <ContactMessage>
      I’m always open to new projects whenever I have the time.
      If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life,
      feel free to conatct me. 🖐
    </ContactMessage>
    <SocialsContainer>
      <a
        href="https://github.com/JaniecMichal"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SocialIcon src={ghIcon} alt="githubIcon" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100002006529733"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SocialIcon src={fbIcon} alt="facebookIcon" />
      </a>
      <a
        href="https://www.instagram.com/lordmichal/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SocialIcon src={inIcon} alt="instagramIcon" />
      </a>
      <a
        href="www.linkedin.com/in/JaniecMichal"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SocialIcon src={liIcon} alt="linkedinIcon" />
      </a>
    </SocialsContainer>
  </StyledFooter>
);

export default Footer;