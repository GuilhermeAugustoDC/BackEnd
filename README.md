# BackEnd

Este repositório contém o backend de um sistema para gerenciamento de tarólogos do Telegram, utilizando Node.js, Express e Mongoose.

## Estrutura

- **src/controllers/**: Lógica das rotas (tarólogo)
- **src/models/**: Modelos do banco de dados (Tarologo)
- **src/routes/**: Rotas da API
- **src/services/**: Serviços auxiliares

## Funcionalidades

- Cadastro, consulta, atualização e remoção de tarólogos

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Configure o arquivo `.env` com sua string de conexão MongoDB e porta.
3. Inicie o servidor:
   ```
   npm run dev
   ```

## Comunicação com o FrontEnd

- O backend expõe uma API REST (por padrão em `http://localhost:3000/api`)
- O frontend consome essas rotas para cadastrar tarólogos e consultar dados

## Exemplos de rotas

- `POST /api/createTarologo` — cadastra tarólogo
- `GET /api/tarologos` — lista todos os tarólogos
- `GET /api/tarologo/:id` — consulta tarólogo por ID
- `PUT /api/tarologo/:id` — atualiza tarólogo por ID
- `DELETE /api/tarologo/:id` — remove tarólogo por ID

---
