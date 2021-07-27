import styled from 'styled-components';

const StyleForm = styled.div`
  form {
    display: flex;
    width: 80vw;
    height: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 3%;
  }

  head {
    display: flex;
    justify-content: space-around;
  }

  div {
    margin-top: 2vw;
    display: flex;
    width: 100vw;
    height: 30vw;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  textarea {
    resize: none;
    width: 600px;
    height: 400px;
    padding: 3px;
    border: 2px solid #5f5a5a;
    box-shadow: 2px 2px 4px #c0c0c0 inset;
    padding: 13px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 10px;
  }

  input {
    border: 2px solid #5f5a5a;
    box-shadow: 3px 3px 6px #c0c0c0 inset;
    height: 2vw;
    text-align: center;
    padding: 13px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 10px;
    width: 10vw;
  }

  @media {
    max-width: 80%;
  }
`;

export default StyleForm;
