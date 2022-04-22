import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-gray-0: #F8F9FA;
    --color-gray-1: #868E96;
    --color-gray-2: #343B41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;
    --color-sucess: #3FE864;
    --color-error: #E83F5B;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: var(--color-gray-4);
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`

export default GlobalStyles;