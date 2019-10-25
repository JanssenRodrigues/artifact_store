import React from "react";
import { CardContainer, CardNumber } from "./style";

const Card = ({ data }) => {
  const { id, name, description, datetime, comments } = data;
  return (
    <CardContainer>
      <CardNumber>{`#${id}`}</CardNumber>
      <p>
        <strong>Nome: </strong>
        {name}
      </p>
      <p>
        <strong>Descrição: </strong>
        {description}
      </p>
      <p>
        <strong>Data da descoberta: </strong>
        {datetime && new Date(datetime).toLocaleString()}
      </p>
      <p>
        <strong>Comentários: </strong>
        {comments}
      </p>
    </CardContainer>
  );
};

export default Card;
