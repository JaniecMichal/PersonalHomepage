import React from "react";
import {
  SectionHeader,
  SectionHeaderTitle,
  Skill,
  Skills,
  StyledImage,
  StyledSection,
  Circle,
} from "./styled";

const Section = ({ sectionTitle, sectionIcon, sectionList, darkMode }) => {
  return (
    <StyledSection darkMode={darkMode}>
      <SectionHeader>
        <SectionHeaderTitle darkMode={darkMode}>
          {sectionTitle}
        </SectionHeaderTitle>
        <StyledImage src={sectionIcon} alt="tools" />
      </SectionHeader>
      <article>
        <header></header>
        <Skills darkMode={darkMode}>
          {!!sectionList &&
            sectionList.map((listItem) => (
              <Skill key={listItem}>
                <Circle />
                {listItem}
              </Skill>
            ))}
        </Skills>
      </article>
    </StyledSection>
  );
};

export default Section;
