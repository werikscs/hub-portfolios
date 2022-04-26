import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;

  padding: 8px 16px;

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.75rem")};
  font-weight: 600;

  border-radius: 4px;

  color: var(--color-gray-0);
  background-color: var(--color-gray-3);

  :hover {
    background-color: var(--color-gray-2);
  }
`;
