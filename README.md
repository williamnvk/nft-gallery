﻿# NFT Gallery

Este é um projeto de uma galeria de NFTs que acessa os serviços **Reservoir** e **OpenSea**. Ele foi desenvolvido com foco na facilidade de entendimento e manutenção, sendo simples de usar para desenvolvedores de qualquer nível. O projeto é dividido em duas partes: **client** e **server**.

## Links Importantes

| Recurso              | Link                                                                 |
|----------------------|----------------------------------------------------------------------|
| **Endereço da API**  | [https://nft-gallery-c17cdb2a1bd7.herokuapp.com/api/v1/test](https://nft-gallery-c17cdb2a1bd7.herokuapp.com/api/v1/test) |
| **Swagger Docs**     | [https://nft-gallery-c17cdb2a1bd7.herokuapp.com/api-docs](https://nft-gallery-c17cdb2a1bd7.herokuapp.com/api-docs) |
| **Front-end**        | [https://nft-gallery-chi-tawny.vercel.app/](https://nft-gallery-chi-tawny.vercel.app/) |

### Importante

Veja o histórico de commits para acompanhar avanço da aplicação commit a commit. O uso do [conventional-changelog/commitlint]([conventional-changelog/commitlint) foi implementado para assegurar que todas as mensagens de commit sigam um padrão claro e consistente, facilitando o entendimento do histórico de commits e a colaboração no projeto.

## Descrição

## Tecnologias Utilizadas

### Server
- **Node.js**
- **Express.js**
- **MongoDB**
- **TypeScript**

### Client
- **Next.js**
- **TypeScript**
- **Chakra UI**

## Documentação da API

A implementação do Swagger foi essencial para este projeto, garantindo que a API seja bem documentada e fácil de entender. Com isso, a integração e manutenção da API se tornam mais eficientes, permitindo uma maior colaboração entre desenvolvedores.

## Front-end

### Conectar Carteira
Este projeto permite a conexão com uma carteira web3 para realizar a autenticação. Essa funcionalidade é essencial para o funcionamento da aplicação, pois garante a segurança e a personalização da experiência do usuário.

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/williamnvk/nft-gallery
cd nft-gallery
```

### 2. Instale as dependências do servidor (Back-end)

```bash
cd server
npm i
```

### 3. Crie um arquivo .env e preencha o com base nesse exemplo

```
ENV=production
PORT=8000
JWT_SECRET=

## MongoAtlas
DATABASE_URL=

## Reservoir
RESERVOIR_API_URL=
RESERVOIR_API_KEY=

## OpenSea
OPEN_SEA_API_URL=
OPEN_SEA_API_KEY=

## REDIS
REDIS_HOST=
```

### 4. Inicialize o servidor

```
npm run dev
```

O projeto deverá ficar disponível no endereço local `http://localhost:8000` e pode ser testado acessando  [http://localhost:8000/api/v1/test](http://localhost:8000/api/v1/test).

### 5. Instale as dependencias do cliente (Front-end)

```bash
cd client
npm i
```

### 4. Inicialize o cliente

```
npm run dev
```

O projeto deverá ficar disponível no endereço local `http://localhost:3000` e pode ser testado acessando  [http://localhost:3000/](http://localhost:3000/).
