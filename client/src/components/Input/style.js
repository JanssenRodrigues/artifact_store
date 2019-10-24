import styled, { css } from "styled-components";

const FieldsStyle = css`
  width: 100%;
  height: 100%;
  padding: 11px 15px;
  border: 1px solid rgba(116, 130, 150, 0.2);
  border-radius: 3px;
  z-index: 1;
  &:focus {
    border-color: #326fff;
    outline-color: #326fff;
    + label {
      height: auto;
      color: #2d3a40;
      transform: translate(-10px, -8px) scale(0.75);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  max-height: ${({ type }) => (type ? "43px" : "none")};
  margin-bottom: 35px;
  position: relative;
`;

export const InputLabel = styled.label`
  color: rgba(45, 58, 64, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(14px, 14px);
  pointer-events: none;
  transition: 0.2s transform ease-in-out;
  background-color: #fff;
  font-size: 16px;
  z-index: 1;
  ${({ inputValue }) =>
    inputValue !== "" &&
    css`
      transform: translate(-10px, -8px) scale(0.75);
    `};
`;

export const InputField = styled.input`
  ${FieldsStyle}
  + [type="datetime-local"] {
    height: 30px;
  }
`;

export const TextAreaField = styled.textarea`
  ${FieldsStyle}
`;

export const InputError = styled.span`
  display: none;
  flex-direction: column;
  justify-content: center;
  min-width: 225px;
  height: 24px;
  padding-left: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 36px;
  position: absolute;
  left: 0;
  top: 0;
  background: #f0175c;
  border-radius: 0px 0px 4px 4px;
  color: #fff;
  z-index: 0;
  transition: 0.3s top ease-in-out;
  ${({ error }) =>
    error &&
    css`
      display: flex;
      top: calc(100% + 1px);
    `}
`;
