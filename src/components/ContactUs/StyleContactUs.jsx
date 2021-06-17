import styled from 'styled-components';

const StyleForm = styled.div`
  form {
    display: flex;
    width: 80vw;
    height: 100vw;

    flex-direction: column;
    align-items: center;
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
    width: 30vw;
    height: 20vw;
    padding: 3px;
    border: 2px solid #f5c5c5;
    box-shadow: 1px 1px 2px #c0c0c0 inset;
    padding: 13px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

  input {
    border: 2px solid #f5c5c5;
    box-shadow: 3px 3px 6px #c0c0c0 inset;
    height: 2vw;
    text-align: center;
    padding: 13px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
`;

export default StyleForm;
