import styled from "styled-components";

export const Section = styled.section`
  position: absolute;
  top: 160px;

  width: 100%;
  max-width: 370px;
  min-width: 300px;

  padding: 0 12px;

  > div {
    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 16px 22px;

    border-radius: 4px 4px 0 0;

    background-color: var(--color-gray-2);

    h4 {
      font-weight: 700;
      font-size: 0.875rem;

      color: var(--color-gray-0);
    }

    span {
      font-weight: 600;
      font-size: 1rem;

      color: var(--color-gray-1);

      cursor: pointer;
    }
  }

  > section {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 20px 22px 0;

    border-radius: 0 0 4px 4px;

    background-color: var(--color-gray-3);
  }

  .btns {
    display: flex;
    gap: 17px;

    padding-top: 0;

    background-color: var(--color-gray-3);
  }
`;
