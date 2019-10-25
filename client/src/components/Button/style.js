import styled, { css } from "styled-components";
import media from "../../mediaQueries";

export const ButtonDefaultStyle = css`
  width: 100%;
  max-width: 250px;
  margin-bottom: 20px;
  background-color: #14e298;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  font-weight: bold;
  letter-spacing: 0.0125em;
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;
  ${media.desktop`
    &:hover {
      background-color: #23f7ab;
      color:#000;
    }
  `}
`;

export const Button = styled.button`
  ${ButtonDefaultStyle};
`;
