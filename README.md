## Desafio WA Project - Fullstack React/Node

A aplicação tem como objetivo ser um catálogo de filmes com informações básicas de título, descrição, diretor e produtor.

### Visão geral
  Durante o desenvolvimento, eu utilizei:
  - [NestJS](https://docs.nestjs.com) para o desenvolvimento no backend;
  - [React](https://pt-br.reactjs.org) para o desenvolvimento no frontend;
  - a ORM [Prisma](https://www.prisma.io) em conjunto com o banco de dados postgres para armazenar as informações;
  - [Docker](https://docs.docker.com) e [Docker-compose](https://docs.docker.com/compose/) para isolar a api em conjunto com o banco em modo de desenvolvimento;
  - [Github Actions](https://github.com/features/actions) para automatização de deploy;
  - Heroku como plataforma em cloud para hospedagem;

## Backend

Link: https://wa-movie-backend.herokuapp.com/api/docs

A aplicação backend foi construída utilizando [NestJS](https://docs.nestjs.com) com o intuito de escalamento do projeto.

O projeto também possuí uma documentação no [Swagger](https://swagger.io) e link acima ao qual já redireciona com todas as informações das rotas disponíveis.

**Sobre a arquitetura**

Também construí a aplicação utilizando Arquitetura hexagonal com conceitos de DDD, Orientação a objetos e Clean Code.

Ela está divida nas seguintes camadas:
  - `presentation`: Responsável por conter tudo o que é resposável pelo fluxo de entrada e saída da aplicação, podendo incluir validações de entrada e tratativa de erro caso seja necessário.
  - `domain`: Responsável por conter toda a lógica e regra de negócio através de seus serviços.
  - `infra`: Responsável por conter e gerenciar comunicações externas, seja com banco de dados, com provedores como APIs externas e microserviços.
  - `shared`: Responsável por conter tudo aquilo que pode ser compartilhado entre outras camadas, como tipagens e configurações de ambiente.

**Sobre o banco de dados**

Ao executar a aplicação, com os dados configurados corretamente, de inicio é realizado uma requisição ao qual popula o banco com os dados mais recentes vindo da API de extração selecionada.

O banco só tem uma tabela e ela está da seguinte forma:

|       **id**       |    **title**   | **director** |  **productor**  | **description** |
|:------------------:|:--------------:|:------------:|:---------------:|:---------------:|
| 2d419306-345a-458f | Koi no katachi | Naoko Yamada | Kyoto animation |  Wow such movie |
|  9e48-483acf1a4534 |     Matrix     |  Wachowskis  |   Warner bros   |   Mindblowing   |
|  6b5be6e9-d8b4dfw  |     Closer     | Mike Nichols |     Columbia    |  About peoples  |

**Rodando localmente com docker/docker-compose**

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a API localmente:
1. `$ cd api`
2. `$ cp .env.example .env`
3. `$ docker-compose up -d`
> > A aplicação estará rodando em http://localhost:3000

**Rodando testes**

Para rodar os testes, basta rodar os seguintes comando:

1. `$ npm install`
2. `$ npm run test`

## Frontend

Link: https://wa-catalog.herokuapp.com/

A aplicação front foi construída utilizando [React](https://pt-br.reactjs.org) em conjunto com [Vite](https://vitejs.dev) e [Vitest](https://vitest.dev) para builds mais rápidas e eficientes.

Também utilizei Context API para prover os dados e funções que tem ligacão com requisições, e axios para realiza-los.

O projeto conta com a estilização desenvolvida em [styled-components](https://styled-components.com), para facilitar herença, hierarquia, condicionais e componentização de estilos.

Todo o front foi desenvolvido da forma mais descomplicada com o intuíto de deixar toda a lógica e trabalho "braçal" necessário com o backend, assim, facilitando ao máximo seu desenvolvimento.

**Rodando localmente**

Atenção, para o funcionamento correto da aplicação é necessário que api esteja rodando!

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a front localmente:
1. `$ cd webapp`
2. `$ cp .env.example .env`
3. `$ npm install`
4. `$ npm run dev`
> > A aplicação estará rodando em http://localhost:5173

**Rodando testes**

Para rodar os testes, basta rodar o seguinte comando:

1. `$ npm run test`

## Instruções de desenvolvimento
**Regras**:
  - `Backend`:
    - [x] Deverá ser uma API desenvolvida em NodeJS;
    - [x] Deverá conter um endpoint ao qual consulta 50 filmes com as informações `título`, `banner`, `descrição`, `produtor` e `diretor`;
    - [x] Deverá conter um endpoint de consulta com paginação de 10 em 10 a todos os filmes que estiver no nosso banco de dados;
    - [x] Os dados deverão ser salvas em um banco de dados ([API de extração](https://ghibliapi.herokuapp.com/#tag/Films));
  - `Frontend`:
    - [x] Deverá conter uma tela de exibição dos filmes, consutaldos em paginação do backend;
    - [x] Deverá conter um botão de atualizar, que vai puxar os 50 filmes da API externa e atualizar o banco de dados da API do projeto;
  - `Diferenciais`:
    - [x] Cobertura de testes no front e backend;
    - [x] Boas práticas de desenvolvimento e clean code;
    - [x] Realizar Deploy com sistema de CI/CD;


**Requisitos**:
  - [x] Toda a aplicação deve ser construída com a stack Javascript/Typescript;
  - [x] A API deve conter uma documentação (**Swagger**);
  - [x] Possuir um **README** contendo a explicação do projeto, tecnologias utilizadas e como rodar;
  - [x] Estar versionado no Github;

## Possiveis melhorias

Como toda aplicação, sempre existe onde melhorar, visando isso estou fazendo uma lista para possíveis melhorias para implementação.

  - `backend`:
    - Implementação de testes de integração;
    - Maior cobertura de testes unitários;
    - Formas de autenticação em requisições para impedir chamadas em massa;
  - `frontend`:
    - Cobertura completa de testes unitários;
    - Implementação de documentação para componentes com [Storybook](https://storybook.js.org);
    - Alterar context api para uma biblioteca que facilita a comunicação e compartilhamente de informações entre os componentes, como [React Query](https://react-query-v3.tanstack.com) ou [Redux toolkit](https://redux-toolkit.js.org)
    - Implementação de teste e2e com [cypress](https://www.cypress.io)
  - `ci/cd`:
    - Impedir push direto na branch main;
    - Aplicar bateria de testes ao pull request;
    - Permitir o merge apenas quando o coverage de testes é batido;
    - Permitir o merge apenas quando não houver problemas de lint;
