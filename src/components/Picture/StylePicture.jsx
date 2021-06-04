import styled from 'styled-components';

const StylePicture = styled.div`
  .caption {
    border: 2px red dotted;
    font-size: 2em;
    width: 40%;
  }

  article {
    margin-top: -2%;
    width: 60%;
    height: 70%;
    display: flex;
    min-width: 200px;
    border: 2px blue dotted;
    margin-left: 20%;
    margin-right: 20%;
    align-items: center;
    flex-direction: row-reverse;
  }

  .pictures {
    width: 55%;
    height: auto;
    border: 2px yellowgreen dotted;
  }
`;

export default StylePicture;
