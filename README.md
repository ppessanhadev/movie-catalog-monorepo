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

### Backend

Link: https://wa-movie-backend.herokuapp.com/api/docs

A aplicação backend foi construída utilizando [NestJS](https://docs.nestjs.com) com o intuito de escalamento do projeto.

Em conjunto com o backend, também construí a aplicação utilizando conceitos de DDD, Orientação a objetos e Clean Code.

O projeto também possuí uma documentação no [Swagger](https://swagger.io) e link acima ao qual já redireciona com todas as informações das rotas disponíveis.

**Rodando localmente com docker/docker-compose**

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a API localmente:
1. `$ cd api`
2. `$ cp .env.example .env`
3. `$ docker-compose up -d`
> > A aplicação estará rodando em http://localhost:3000

**Rodando testes**

Após rodar a aplicação localmente, siga os seguintes passos:

1. `$ docker-compose exec api sh`
2. `$ npm run test`

## Frontend

Link: https://wa-catalog.herokuapp.com/

A aplicação front foi construída utilizando [React](https://pt-br.reactjs.org) em conjunto com [Vite](https://vitejs.dev) e [Vitest](https://vitest.dev) para builds mais rápidas e eficientes.

Também utilizei Context API para prover os dados e funções que tem ligacão com requisições, e axios para realiza-los.

O projeto conta com a estilização desenvolvida em [styled-components](https://styled-components.com), para facilitar herença, hierarquia, condicionais e componentização de estilos.

**Rodando localmente**

Atenção, para o funcionamento correto da aplicação é necessário que api esteja rodando!

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a front localmente:
1. `$ cd webapp`
2. `$ cp .env.example .env`
3. `$ npm run dev`
> > A aplicação estará rodando em http://localhost:5173

**Rodando testes**

Para rodar os testes, basta rodar o seguinte comando:

1. `$ npm run test`


### Instruções de desenvolvimento
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

