import styled, { css, keyframes } from "styled-components";
import media from "../../mediaQueries";

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const SubmitedStyle = css`
  border: 1px solid #14e298;
  background-color: #fff;
  color: #14e298;
  cursor: not-allowed;
  &:hover {
    background-color: #fff;
  }
`;

export const Button = styled.button`
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
    }
  `}
  ${({ disabled }) => disabled && SubmitedStyle};
`;

export const InfoLabel = styled.span`
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 36px;
  letter-spacing: 0.0125em;
  color: #2d3a40;
  background: #f5f7fa;
  border-radius: 4px;
  animation: 0.5s ${fadeInDown} ease-in-out;
`;
