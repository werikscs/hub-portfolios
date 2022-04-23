import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 22px;

  font-weight: 500;

  border: none;
  border-radius: 4px;

  width: ${({ width }) => width || "%100"};

  background-color: ${({ colorType }) => {
    switch (colorType) {
      case "disabled":
        return "var(--color-gray-1)";
      case "negative":
        return "var(--color-primary-negative)";
      default:
        return "var(--color-primary)";
    }
  }};

  :hover {
    background-color: ${({ colorType }) => {
      switch (colorType) {
        case "disabled":
          return "var(--color-gray-2)";
        case "negative":
          return "none";
        default:
          return "var(--color-primary-focus)";
      }
    }};
  }
`;
