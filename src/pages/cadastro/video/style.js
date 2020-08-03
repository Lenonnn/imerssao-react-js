import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 1360px;
  margin: auto;
  h1 {
    font-size: 60px;
    color: var(--grayLight);
    text-align: center;
    background: var(--black);
  }

  input {
    width: 100%;

    margin: 20px auto;
    padding: 20px 10px;
    border-radius: 4px;
    background: #53585d;
    color: #e5e5e5;
  }

  textarea {
    width: 100%;

    margin: 20px auto;
    padding: 20px 10px;
    border-radius: 4px;
    background: #53585d;
    color: #e5e5e5;
  }

  div {
    display: flex;
    width: 960px;

    .btn-salvar {
      background: var(--primary);
      width: 180px;
      height: 54px;
      border: none;
      margin: 5px 15px 20px 0;
    }

    .btn-limpar {
      background: var(--blackLighter);
      width: 180px;
      height: 54px;
      border: none;
      margin: 5px 15px 20px 0;
    }
  }
`
export default Form;
