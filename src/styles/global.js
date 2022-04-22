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

  main{
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }

  h2{
    color: var(--color-gray-0);
  }

  label{
    display: block;
    color: var(--color-gray-0);
  }

  input{
    width: 100%;
    background-color: var(--color-gray-2);
    color: var(--color-gray-0);
    border: none;
    outline: none;

    ::placeholder{
      color: var(--color-gray-1);
    }

    :focus{
      outline: 1px solid var(--color-gray-0);
    }
  }

  button{
    color: #ffffff;
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;

export default GlobalStyles;
