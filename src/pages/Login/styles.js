import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 320px;
  max-width: 370px;

  margin: 16px 0;
  padding: 0 12px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 18px;
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

    font-weight: 600;
    font-size: 0.6rem;

    margin: 27px 0 20px;
  }
`;
