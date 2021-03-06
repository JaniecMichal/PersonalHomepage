import styled from "styled-components";

const Container = styled.main`
  max-width: 1216px;
  margin: 50px auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 10px;
  }
`;

export default Container;
