import styled from "styled-components";

const PrototypeDishWrapper = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
  z-index: 1;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  > p {
    font-family: 'Korean_Calligraphy';
  }

  img {
    width: 100%;
  }

 button {
    all: unset;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    overflow: hidden;
    cursor: pointer;
  }
`;

export { PrototypeDishWrapper };