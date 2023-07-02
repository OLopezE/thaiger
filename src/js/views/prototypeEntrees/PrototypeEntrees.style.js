import styled from "styled-components";

const EntreesWrapper = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  overflow-y: auto;
  padding: 0 2rem;
  display: grid;
  gap: 2rem;
  position: relative;
`;

const EntreesTitle = styled.h2`
    position: absolute;
    transform: rotate(90deg);
    bottom: 3rem;
    right: -2rem;
`;

export { EntreesWrapper, EntreesTitle };
