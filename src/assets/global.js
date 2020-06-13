import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Noto Serif KR', sans-serif;
    font-size: 10px;
    overflow-x: hidden;
  }

  *, :before, :after {
    box-sizing: border-box;
  }

  input, textarea {
    padding: 0;
    border: none;
    outline: none;
  }

  button {
    padding: 0;
    border: none;
  }

  p {
    margin: 0;
  }
`

const flexMC = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const centerAlign = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export { GlobalStyles, flexMC, centerAlign }
