import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Noto Serif KR', sans-serif;
    font-size: 10px;
    overflow-x: hidden;
    min-height: 100vh;
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

  a {
    color: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    border: 0;
    text-decoration: inherit;


    &:visited,
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }
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
