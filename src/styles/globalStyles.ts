import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #000;
  }
  * , *:before, *:after {
    box-sizing: inherit;
  }
`
export default GlobalStyle
