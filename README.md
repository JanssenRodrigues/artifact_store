# Artifact Store

## Dependências
- Nodejs 12
- NPM 6+
- Knex
- Docker
- Docker Compose

## Como rodar o projeto

Dentro do diretório do projeto, rodar o seguinte comando:

- `sudo docker-compose up --build`

Este comando ir inicializar uma instancia do MYSQL, do Front-End e a API.

Para acessar o Front-End da aplicação basta acessar: `http://localhost:3000`

Para acessar a API da aplicação basta acessar: `http://localhost:4000/graphql`

No Front-End você terá acesso a duas páginas, uma de cadastro de artefatos e uma página de listagem de artefatos, ambas navegaveis entre si.

Na API, você terá acesso ao Playground, onde poderá testar todas as queries e mutations criadas.

## IMPORTANTE

A instancia do MYSQL irá tentar utilizar a porta padrão(3306), verifique se esta porta está disponível.
Caso contrário o MYSQL não irá conectar e a API não conseguirá fazer a sua conexão

Caso haja problemas com algum problema com conflito, sugiro(mas apenas em último caso) utilizar o seguinte comando:

`sudo docker system prune -a`

MAS CUIDADO, ESTE COMANDO IRÁ EXCLUIR OS CONTAINERS, IMAGES E VOLUMES DA SUA MÁQUINA.


## Exemplos de Query e Mutation

### Buscar uma lista de Artefatos(getAll).

Verificar opções de parametros disponíveis dentro do Playground.

```js
query getAllArtifact($offset: Int, $limit: Int) {
  artifacts(offset: $offset, limit: $limit) {
    list{
      id
      name      
    }
  }
}
```

### Buscar um Artefato específica baseada em seu ID.
```js
query getArtifact($id: Int) {
  artifact(id: $id) {
    id
    name
  }
}
```

### Criar um Artefato
```js
mutation CreateArtifact($artifactInput: ArtifactInput!) {
  createArtifact(artifact: $artifactInput) {
    id
    name
  }
}
``` 

### Atualizar um Artefato
```js
mutation UpdateArtifact($artifactInput: UpdateaArtifactInput!) {
  updateArtifact(artifact: $artifactInput) {
    id
    name
  }
}
``` 

### Deletar um Artefato
```js
mutation DeleteArtifact($id: Int!) {
  deleteArtifact(id: $id)
}
```


## Próximas versões
- [ ] Implementar testes
- [ ] Criar página de atualização de artefato
- [ ] Criar feature de deleção de artefato
- [ ] Tratar os dados
