import React from "react";
import { StyledHeader, MyPhoto, About, Caption, HeaderTitle, MyDescription, } from "./styled";
import Button from "../Button";

const MainHeader = ({darkMode}) => (
  <StyledHeader>
    <MyPhoto />
    <About>
      <Caption darkMode={darkMode}>This is</Caption>
      <HeaderTitle darkMode={darkMode}>Michał Janiec</HeaderTitle>
      <MyDescription darkMode={darkMode}>
        👨‍🎓💻🖥 I love work which require <strong>analytical thinking</strong> and looking for<strong> the best solutions</strong>.
        I have decided to be <i>Frontend Developer</i> because creating web applications and amazing websites give me lots of satisfaction.
        I would like to use my skills to work with interesting and important projects.
      </MyDescription>
      <Button icon={true} buttonMessage={"Hire Me"} darkMode={darkMode}/>
    </About>
  </StyledHeader>
);

export default MainHeader;