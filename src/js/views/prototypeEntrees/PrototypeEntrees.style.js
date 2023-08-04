import styled from "styled-components";

const EntreesWrapper = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  overflow-y: auto;
  padding: 10rem 2rem;
  display: grid;
  gap: 4rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);

    > h1 {
      grid-column: span 3;
    }
  }

  > h1 {
    text-align: center;
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
