import React, { useState, useRef } from "react";
import { PageContent } from "../../style";
import { FormContainer, SuccesMessage } from "../Form/style";
import Input from "../Input";
import { Button } from "../Button/style";

const RegisterPage = () => {
  const [error, setError] = useState(false);
  const [isSubmited, setIsSubmited] = useState(true);
  const ref = useRef(null);

  const formValidation = ref => {
    if (ref.current.name.value === "") {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  return (
    <PageContent>
      <FormContainer
        ref={ref}
        onSubmit={e => {
          e.preventDefault();
          const isValid = formValidation(ref);
          isValid && setIsSubmited(true);
        }}
      >
        <Input
          type="text"
          placeholder="Nome do artefato"
          name="name"
          isRequired
          error={error}
          setError={setError}
        />
        <Input placeholder="Descrição do artefato" name="description" />
        <Input
          type="datetime-local"
          placeholder="Horário da descoberta"
          name="datetime"
        />

        <Input placeholder="Comentários extras" name="comments" />
        <Button isSubmited={isSubmited} disabled={isSubmited}>
          Registrar novo artefato
        </Button>
        {isSubmited && <SuccesMessage>COE MANOOO</SuccesMessage>}
      </FormContainer>
    </PageContent>
  );
};

export default RegisterPage;
