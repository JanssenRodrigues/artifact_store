import styled from "styled-components";
import { Link } from "@reach/router";
import { PageContent } from "../../style";
import media from "../../mediaQueries";
import { ButtonDefaultStyle } from "../Button/style";

export const ListContainer = styled(PageContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 35px;
  ${media.tablet`
    flex-direction: row;
    justify-content: center;
    max-width: 1500px;
    padding: 60px 60px 80px;
    margin: 35px auto 0;
  `};
`;

export const Button = styled(Link)`
  ${ButtonDefaultStyle};
  display: block;
  text-decoration: none;
  text-align: center;
`;
