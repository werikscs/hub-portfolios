import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  label {
    font-size: 0.625rem;

    margin: 17px 0;

    align-self: flex-start;
  }

  div {
    position: relative;

    width: 100%;

    input {
      height: 38.5px;

      padding: 0 13px;

      font-size: 0.8rem;

      border-radius: 3px;
    }

    button {
      position: absolute;
      top: 33%;
      right: 11px;

      width: fit-content;

      background-color: transparent;

      border: none;

      svg {
        filter: invert(58%) sepia(6%) saturate(453%) hue-rotate(169deg)
          brightness(95%) contrast(89%);
        font-size: 15px;

        pointer-events: none;
      }
    }
  }
`;
