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
    width: 100%;

    input {
      height: 38.5px;

      padding: 0 13px;

      font-size: 0.8rem;

      border-radius: 3px;
    }
  }
`;
