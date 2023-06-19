import styled from "styled-components";

const SaladsWrapper = styled.section`
  padding: 10rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #d4cdc0;
  min-height: 100svh;
  align-items: center;
  gap: 1rem;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

const SaladsGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

export { SaladsWrapper, SaladsGrid }
