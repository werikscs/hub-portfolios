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

  html{
    font-size: 18px;
  }

  body{
    background-color: var(--color-gray-4);
  }

  main{
    position: relative;

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    overflow-x: hidden;
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
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    border: none;
  }

  a{
    text-decoration: none;
  }

  .Toastify__toast-container {
    font-family: 'Inter';
    font-size: 0.875rem;
    font-weight: 700;

    color: var(--color-gray-0);
  }

  .Toastify__toast-body{
    width: 100%;
  }

  .Toastify__toast{
    background-color: var(--color-gray-2);
  }

  .Toastify__toast-icon{
    width: 28px;
  }

  .Toastify__toast--error .Toastify__toast-icon svg{
    fill: var(--color-error);
  }

  .Toastify__toast--success .Toastify__toast-icon svg{
    fill: var(--color-sucess);
  }

  .Toastify__progress-bar--error{
    background-color: var(--color-error);
  }

  .Toastify__progress-bar--success{
    background-color: var(--color-sucess);
  }


  .Toastify__close-button svg{
    filter: invert(57%) sepia(16%) saturate(189%) hue-rotate(169deg) brightness(94%) contrast(87%);
  }

  .Toastify__close-button{
    width: fit-content;
  }

`;

export default GlobalStyles;
