import styled from "styled-components";

const EntreesWrapper = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  overflow-y: auto;
  padding: 10rem 2rem;
  display: grid;
  gap: 4rem;
`;

const EntreesTitle = styled.h2`
    position: fixed;
    transform: rotate(270deg);
    color: #ffffff52;
    font-size: 9rem;
    bottom: 18rem;
    right: -19rem;
`;

export { EntreesWrapper, EntreesTitle };
