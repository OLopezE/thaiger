import styled from "styled-components";

const FirstPageWrapper = styled.section`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;

  > img {
    width: 100%;
  }
`;

const SeparatorLine = styled.div`
  height: 30rem;
  width: 4px;
  background-color: #eee4ca;
`;

export { FirstPageWrapper, SeparatorLine };
