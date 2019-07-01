import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    color: #fff;
    background: #fff;
    font-family: Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button{
    font-family: Helvetica, Arial, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
