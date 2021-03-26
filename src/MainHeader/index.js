import React from "react";
import {
  StyledHeader,
  MyPhoto,
  About,
  Caption,
  HeaderTitle,
  MyDescription,
  ContactLink,
  MessageIcon,
} from "./styled";

const MainHeader = ({ darkMode }) => (
  <StyledHeader>
    <MyPhoto />
    <About>
      <Caption darkMode={darkMode}>This is</Caption>
      <HeaderTitle darkMode={darkMode}>Michał Janiec</HeaderTitle>
      <MyDescription darkMode={darkMode}>
        👨‍🎓💻🖥 I love work that requires <strong>analytical thinking</strong> and
        looking for <strong>the best solutions</strong>. I have decided to be a
        <i> Frontend Developer</i> because creating web applications and amazing
        websites gives me lots of satisfaction. I would like to use my skills to
        work on interesting and important projects.
      </MyDescription>
      <ContactLink
        darkMode={darkMode}
        href="mailto:michal.janiec95@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        icon={true}
      >
        <MessageIcon /> Hire Me
      </ContactLink>
    </About>
  </StyledHeader>
);

export default MainHeader;
