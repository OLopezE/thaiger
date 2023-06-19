import styled from "styled-components";

const DishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;

  > p, h3 {
    margin: 0;
    text-align: center;
  }

  >p {
    font-weight: lighter;
  }

  > p:last-child {
    color: red;
    font-weight: bold;
  }
`;

export { DishWrapper };
