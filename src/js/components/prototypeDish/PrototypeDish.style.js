import styled from "styled-components";

const PrototypeDishWrapper = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
  z-index: 1;
  place-items: center;

  > div {
    display: grid;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: 'Korean_Calligraphy';
  }

  h3 {
    font-size: 3.5rem;
  }

  img {
    width: 100%;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.section`
  width: 80%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PrototypeDishWrapper, ImageContainer };