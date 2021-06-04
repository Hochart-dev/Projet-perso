import styled from 'styled-components';

const StyleArtwork = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  article {
    margin-top: 3%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    min-width: 200px;
  }

  .pictures {
    width: 20vw;
    height: auto;
  }
`;

export default StyleArtwork;
