import styled from "styled-components";
import media from "../../mediaQueries";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 200px;
  margin-right: 1%;
  margin-bottom: 20px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 40px rgba(116, 130, 150, 0.2);
  border-radius: 15px;
  position: relative;
  ${media.tablet`
    width: 49%;
    margin-bottom: 1%;
    &:nth-child(even) {
      margin-right: 0;
    }
  `};
  ${media.desktop`
    width: 24%;
    &:nth-child(even) {
      margin-right: 1%;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  `};
  p {
    margin-bottom: 10px;
  }
`;

export const CardNumber = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: bold;
`;
