import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  ${({ theme }) => `
    box-shadow: ${theme.buttonBoxShadow};
    background:
      linear-gradient(${theme.buttonColor} 0 0) no-repeat
        calc(var(--_p, 0%) - 100%) 0%,
      linear-gradient(${theme.buttonColor} 0 0) no-repeat
        calc(200% - var(--_p, 0%)) 0%,
      linear-gradient(${theme.buttonColor} 0 0) no-repeat
        calc(var(--_p, 0%) - 100%) 100%,
      linear-gradient(${theme.buttonColor} 0 0) no-repeat
        calc(200% - var(--_p, 0%)) 100%;
    background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
    outline-offset: 0.1em;
    transition:
      background-size 0.4s,
      background-position 0s 0.4s;

    &:hover {
      --_p: 100%;
      transition:
        background-position 0.4s,
        background-size 0s;
    }

    &:active {
      box-shadow: ${theme.buttonActiveBoxShadow};
      background-color: ${theme.buttonColor};
      color: ${theme.buttonActiveColor};
    }

    font-family: ${theme.buttonFontFamily};
    cursor: pointer;
    padding: ${theme.buttonPadding};
    font-weight: ${theme.buttonFontWeight};
    border: none;
    border-radius: ${theme.buttonBorderRadius};
  `}
`;
