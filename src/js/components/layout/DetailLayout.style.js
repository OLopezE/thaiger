import styled from "styled-components";

const Layout = styled.div`
  > button {
    all: unset;
    position: fixed;
    left: 1rem;
    top: 1rem;
    border-radius: 50%;
    display: grid;
    gap: 6px;

    > span {
      width: 2rem;
      height: 4px;
      background-color: black;
      border-radius: 1rem;
    }
  }
`;

export default Layout;
