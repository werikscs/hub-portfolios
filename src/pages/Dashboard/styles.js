import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 320px;
  max-width: 780px;

  margin: 16px 0;
  padding: 0 12px;

  position: relative;

  .hr1,
  .hr2 {
    width: 100%;
    height: 1px;

    margin-top: 24px;
    margin-bottom: 19px;

    background-color: var(--color-gray-3);

    border: none;
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;

    color: var(--color-gray-0);
  }

  @media screen and (min-width: 768px) {
    .hr1,
    .hr2 {
      width: 100%;
      height: 1px;

      margin: 0;

      background-color: var(--color-gray-3);

      border: none;
    }

    .hr1 {
      position: fixed;
      top: 95px;
    }

    .hr2 {
      position: fixed;
      top: 200px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;

  width: 100%;

  padding: 18px 0 18px;

  @media screen and (min-width: 768px) {
    height: 118px;
  }

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
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 16px;

  width: 100%;
  max-height: 420px;

  overflow-y: auto;

  margin-top: 21px;
  padding: 22px 8.5px;

  border-radius: 4px;

  background-color: var(--color-gray-3);

  @media screen and (min-width: 768px) {
    padding: 22px 19px;
  }

  li {
    display: flex;
    justify-content: space-between;

    padding: 12.2px;

    border-radius: 4px;

    background-color: var(--color-gray-4);

    cursor: pointer;

    :hover {
      background-color: var(--color-gray-2);
    }

    h4 {
      font-weight: 700;
      font-size: 0.9rem;

      color: var(--color-gray-0);
    }

    span {
      font-weight: 400;
      font-size: 0.75rem;

      color: var(--color-gray-1);
    }
  }
`;
