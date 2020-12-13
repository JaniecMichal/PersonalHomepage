import styled from "styled-components";
import me from "./images/Me.jpg";

export const StyledHeader = styled.header`
  max-width:1089px;
  display:flex;
  flex-flow: row wrap;
  justify-content:space-between;
  align-items:center;
`;

export const MyPhoto = styled.div`
  width:384px;
  height:384px;
  padding:8px;
  border-radius:50%;
  background-image:url(${me});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`;

export const About = styled.div`
  flex-basis:633px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:flex-start;
`;

export const Caption = styled.span`
  font-size:${({ theme }) => theme.fontSize.small};
  color:${({ theme }) => theme.color.slateGray};
  margin-bottom:12px;
  text-transform:uppercase;
`;

export const HeaderTitle = styled.h1`
  font-weight:${({ theme }) => theme.fontWeight.black};
  font-size:${({ theme }) => theme.fontSize.theLargest};
  color:${({ theme }) => theme.color.mineShaft};
  margin-top:0px;
  margin-bottom:35px;
`;

export const MyDescription = styled.p`
  font-weight:${({ theme }) => theme.fontWeight.normal};
  font-size:${({ theme }) => theme.fontSize.large};
  color:${({ theme }) => theme.color.slateGray};
  margin-top:0px;
  margin-bottom:32px;
  line-height: 1.4;
`;