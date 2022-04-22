import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 320px;
  max-width: 370px;

  padding: 0 12px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    button {
      width: fit-content;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 34px 14px;

  border-radius: 3px;

  background-color: var(--color-gray-3);

  h2 {
    margin-bottom: 20px;

    font-size: 0.9rem;

    color: var(--color-gray-0);
  }

  span {
    color: var(--color-gray-1);

    font-weight: 400;
    font-size: 0.6rem;

    margin: 27px 0 20px;
  }
`;
