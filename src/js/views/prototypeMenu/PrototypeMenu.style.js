import styled from "styled-components";

const MainMenuLayout = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  position: relative;

  > a {
    all: unset;
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 1px solid black;
    transition: 0.2s;

    :hover {
      color: white;
      border-bottom: 2px solid white;
      transform: scale(1.05);
    }
  }
`;

export { MainMenuLayout };
