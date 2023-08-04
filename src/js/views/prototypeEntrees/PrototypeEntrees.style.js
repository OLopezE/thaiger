import styled from "styled-components";

const EntreesWrapper = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  overflow-y: auto;
  padding: 10rem 2rem;
  display: grid;
  gap: 4rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > h1 {
    text-align: center;
    grid-column: span 3;
  }
`;

const EntreesTitle = styled.h2`
    position: fixed;
    transform: rotate(270deg);
    color: #ffffff52;
    font-size: 7rem;
    bottom: 15rem;
    right: -15rem;
`;

export { EntreesWrapper, EntreesTitle };
