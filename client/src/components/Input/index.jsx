import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  InputContainer,
  InputField,
  InputLabel,
  InputError,
  TextAreaField
} from "./style";

const Input = ({
  type,
  placeholder,
  name,
  select,
  isRequired,
  error,
  setError
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputContainer select={select}>
      {type ? (
        <InputField
          type={type}
          name={name}
          value={inputValue}
          onBlur={({ target }) =>
            target.value === "" && isRequired ? setError(true) : setError(false)
          }
          onChange={({ target }) => setInputValue(target.value)}
          autoComplete="off"
        />
      ) : (
        <TextAreaField
          name={name}
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
      )}

      <InputLabel htmlFor={name} inputValue={inputValue} type={type}>
        {placeholder}
      </InputLabel>

      <InputError error={error}>Este campo é obrigatório</InputError>
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setSelectedData: PropTypes.func,
  data: PropTypes.array,
  select: PropTypes.bool,
  isRequired: PropTypes.bool,
  isValidInput: PropTypes.bool
};

Input.defaultProps = {
  type: "",
  placeholder: "",
  name: "",
  isOpen: false,
  setIsOpen: () => {},
  setSelectedData: () => {},
  data: [],
  select: false,
  isRequired: false,
  isValidInput: false
};

export default Input;
