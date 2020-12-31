import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./Container";
import MainHeader from "./MainHeader";
import Section from "./Section";
import skillset from "./skillset";
import skillsToLearn from "./skillsToLearn";
import tools from "./images/tools.svg";
import rocket from "./images/rocket.svg";
import ButtonWraper from "./ButtonWraper";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { GlobalStyle } from "./MainStylesAndTheme/GlobalStyle";
import { theme } from "./MainStylesAndTheme/theme.js";
import { useApiData } from "./useApiData";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appState = useApiData();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle darkMode={darkMode} />
        <Container>
          <ButtonWraper darkMode={darkMode} modeToggler={setDarkMode} />
          <MainHeader darkMode={darkMode} />
          <Section
            sectionTitle={"My skillset includes"}
            sectionIcon={tools}
            sectionList={skillset}
            darkMode={darkMode}
          />
          <Section
            sectionTitle={"What I want to learn next"}
            sectionIcon={rocket}
            sectionList={skillsToLearn}
            darkMode={darkMode}
          />
          <Portfolio
            loading={appState.loading}
            error={appState.error}
            darkMode={darkMode}
            repositories={appState.repositories}
          />
          <Footer darkMode={darkMode} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
