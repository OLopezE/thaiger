import styled from "styled-components";

const PrototypeDishWrapper = styled.div`
  padding-right: 2rem;
  text-align: center;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
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