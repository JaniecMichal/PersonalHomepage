import React from "react";
import { SectionHeader, SectionHeaderTitle, Skill, Skills, StyledImage, StyledSection } from "./styled";


const Section = ({ sectionTitle, sectionIcon, sectionList }) => {
  return (
    <StyledSection>
      <SectionHeader>
        <SectionHeaderTitle>{sectionTitle}</SectionHeaderTitle><StyledImage src={sectionIcon} alt="tools" />
      </SectionHeader>
      <article>
        <Skills>
          {
            !!sectionList && (
              sectionList.map(listItem =>
                <Skill key={listItem}>{listItem}</Skill>)
            )
          }
        </Skills>
      </article>
    </StyledSection>
  )
};

export default Section;