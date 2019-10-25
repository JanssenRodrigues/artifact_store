import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Card from "../Card";
import Title from "../Title/style";
import { ListContainer, Button } from "./style";
import { GET_ALL_ARTIFACTS } from "../../services/queries";

const ListPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_ARTIFACTS, {
    variables: { offset: 0 },
    fetchPolicy: "cache-and-network"
  });

  if (loading) return `Loading...`;
  if (error) return `GraphQL Error: ${error.message}`;

  const shouldRender = !loading && !error;
  const { list = [] } = data.artifacts;

  return (
    <ListContainer>
      <Button to="/register">Registrar novo artefato</Button>
      <Title>Lista de Artefatos</Title>
      {!list.length && "Não possuimos nenhum artefato catalogado"}
      {shouldRender && list.map(item => <Card data={item} key={item.id} />)}
    </ListContainer>
  );
};

export default ListPage;
