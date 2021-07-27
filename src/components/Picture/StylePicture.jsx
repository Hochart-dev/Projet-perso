import styled from 'styled-components';

const StylePicture = styled.div`
  caption {
    font-size: 1.5em;
    width: 40%;
  }

  article {
    margin-top: 1%;
    width: 50%;
    height: 60%;
    display: flex;
    min-width: 200px;
    border: 3px darkviolet dotted;

    margin-left: 20%;
    margin-right: 20%;
    align-items: center;
    flex-direction: row-reverse;
  }

  .pictures {
    width: 55%;
    height: auto;
  }
`;

export default StylePicture;
