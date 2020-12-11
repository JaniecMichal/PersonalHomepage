import React from "react";
import { StyledHeader, MyPhoto, About, Caption, HeaderTitle, MyDescription, } from "./styled";
import { StyledButton, MessageIcon } from "./Button";

const MainHeader = () => (
  <StyledHeader>
    <MyPhoto />
    <About>
      <Caption>This is</Caption>
      <HeaderTitle>Michał Janiec</HeaderTitle>
      <MyDescription>
        👨‍🎓💻🖥 I love work which require <strong>analytical thinking</strong> and looking for<strong> the best solutions</strong>.
        I have decided to be <i>Frontend Developer</i> because creating web applications and amazing websites give me lots of satisfaction.
        I would like to use my skills to work with interesting and important projects.
      </MyDescription>
      <StyledButton><MessageIcon />Hire Me</StyledButton>
    </About>
  </StyledHeader>
);

export default MainHeader;