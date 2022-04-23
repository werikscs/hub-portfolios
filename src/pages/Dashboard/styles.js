import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 320px;
  max-width: 780px;

  padding: 0 12px;

  hr {
    width: 100%;
    height: 1px;

    margin-top: 24px;

    background-color: var(--color-gray-3);

    border: none;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;

    width: 100%;

    padding: 35px 0 14px;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;

      color: var(--color-gray-0);
    }

    span {
      font-weight: 400;
      font-size: 0.75rem;

      color: var(--color-gray-1);
    }
  }
`;
