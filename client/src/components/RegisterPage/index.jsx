import React, { useState, useRef } from "react";
import { withApollo } from "react-apollo";
import { navigate } from "@reach/router";

import Input from "../Input";
import Title from "../Title/style";
import { Button } from "../Button/style";
import { Button as ButtonLink } from "../ListPage/style";
import { PageContent } from "../../style";
import FormContainer from "../Form/style";
import { CREATE_ARTIFACT } from "../../services/mutations";

const RegisterPage = ({ client }) => {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDatetime, setInputDatetime] = useState("");
  const [inputComments, setInputComments] = useState("");
  const [error, setError] = useState(false);
  const ref = useRef(null);

  const formValidation = async ref => {
    if (ref.current.name.value === "") {
      setError(true);
      return false;
    }

    setError(false);
    const artifactInput = {
      name: inputName,
      description: inputDescription,
      datetime: inputDatetime,
      comments: inputComments
    };

    const { data } = await client.mutate({
      mutation: CREATE_ARTIFACT,
      variables: { artifactInput }
    });
    data && navigate("/");
  };

  return (
    <PageContent>
      <ButtonLink to="/">Ir para a listagem</ButtonLink>
      <Title>Registrar artefato</Title>
      <FormContainer
        ref={ref}
        onSubmit={e => {
          e.preventDefault();
          formValidation(ref);
        }}
      >
        <Input
          type="text"
          placeholder="Nome do artefato"
          name="name"
          isRequired
          error={error}
          setError={setError}
          inputValue={inputName}
          setInputValue={setInputName}
        />
        <Input
          placeholder="Descrição do artefato"
          name="description"
          inputValue={inputDescription}
          setInputValue={setInputDescription}
        />
        <Input
          type="datetime-local"
          placeholder="Horário da descoberta"
          name="datetime"
          inputValue={inputDatetime}
          setInputValue={setInputDatetime}
        />

        <Input
          placeholder="Comentários extras"
          name="comments"
          inputValue={inputComments}
          setInputValue={setInputComments}
        />
        <Button>Salvar artefato</Button>
      </FormContainer>
    </PageContent>
  );
};

export default withApollo(RegisterPage);
