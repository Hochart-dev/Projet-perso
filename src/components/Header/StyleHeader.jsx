import styled from 'styled-components';

const StyleHeader = styled.header`
  a {
    width: 10%;
    text-decoration: none;
    color: black;
  }

  .logo {
    width: 50%;
    height: auto;
    justify-content: center;
    margin-bottom: 5%;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15vw;
  }

  figcaption {
    font-size: 1.3em;
    align-items: flex-end;
  }

  .header {
    display: flex;
    height: 8vw;
    align-items: flex-end;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: flex-end;
    font-family: 'Roboto', sans-serif;
    margin-left: 5vw;
  }

  li {
    list-style: none;
    font-size: 1.2em;
    margin-left: 3%;
  }
`;

export default StyleHeader;
