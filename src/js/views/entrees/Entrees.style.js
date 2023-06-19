import styled from "styled-components";

const EntreesWrapper = styled.section`
  background: rgb(236,236,214);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  padding: 20rem 1rem;
  align-items: center;
  gap: 1rem;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

const EntreesGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

export { EntreesWrapper, EntreesGrid };
