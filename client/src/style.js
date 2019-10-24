import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import normalize from "styled-normalize";
import media from "./mediaQueries";

export const BaseStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  ${normalize}
  ${reset}

* {
  box-sizing: border-box;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

body {
  font-family: "Roboto";
  background-color: #F5F7FA;
}
`;

export const PageContent = styled.article`
  width: 100%;
  padding: 50px 20px 80px;
  ${media.tablet`
    max-width: 620px;
    padding: 60px 0 80px;
    margin: 0 auto;
  `};
`;
