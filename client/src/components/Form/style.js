import styled from "styled-components";
import media from "../../mediaQueries";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 40px rgba(116, 130, 150, 0.2);
  border-radius: 3px;
  margin-top: 35px;
  padding: 30px 28px;
  position: relative;
  ${media.tablet`
    padding: 27px 170px;
  `}
`;

export const SuccesMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
`;
