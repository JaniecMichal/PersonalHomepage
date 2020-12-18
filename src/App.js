import React from "react";
import Container from "./Container";
import MainHeader from "./MainHeader";
import Section from "./Section";
import skillset from "./skillset";
import skillsToLearn from "./skillsToLearn";
import tools from "./images/tools.svg";
import rocket from "./images/rocket.svg";
import ButtonWraper from "./ButtonWraper";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Container>
      <ButtonWraper />
      <MainHeader />
      <Section
        sectionTitle={"My skillset includes"}
        sectionIcon={tools}
        sectionList={skillset}
      />
      <Section
        sectionTitle={"What I want to learn next"}
        sectionIcon={rocket}
        sectionList={skillsToLearn}
      />
      <Portfolio />
    </Container>
  );
}

export default App;
