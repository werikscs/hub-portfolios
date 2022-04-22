import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 320px;
  max-width: 370px;

  padding: 0 12px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 0 14px;

  border-radius: 3px;

  background-color: var(--color-gray-3);

  h2 {
    margin-top: 34px;
    margin-bottom: 20px;

    font-size: 0.9rem;
  }
`;
