# Elysia-Viem-API

Simple Elysia API for interaction with the Ethereum blockchain.

## 🛠 Built With

[![Bun Badge](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge)](https://bun.sh/)
[![Elysia Badge](https://img.shields.io/badge/ElysiaJS-000?logo=bun&logoColor=fff&style=for-the-badge)](https://elysiajs.com/)
[![Viem Badge](https://img.shields.io/badge/Viem-3C3C3D?logo=ethereum&logoColor=fff&style=for-the-badge)](https://viem.sh/)
[![Hardhat Badge](https://img.shields.io/badge/Hardhat-3C3C3D?logo=ethereum&logoColor=fff&style=for-the-badge)](https://hardhat.org/)
[![Solidity Badge](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=fff&style=for-the-badge)](https://soliditylang.org/)
[![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)](https://www.typescriptlang.org/)

## ⚙️ Run Locally

Clone the project:

```bash
git clone https://github.com/tr1sm0s1n/elysia-viem-api.git
cd elysia-viem-api
```

Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

Install dependencies:

```bash
bun install
```

Test the contract:

```bash
bun test
```

Run Hardhat simulated node on port **8545**:

```bash
bun run node
```

Deploy the contract (new terminal):

```bash
bun run deploy
```

Start the application:

```bash
bun run dev
```

Listen for events (new terminal):

```bash
bun listen
```

Issue a certificate (new terminal):

```bash
curl -X POST http://localhost:3000/issue -H "Content-Type: application/json" -d '{"id": 14, "name": "Deren", "course": "MBCC", "grade": "S", "date": "30-05-25"}'
```

Fetch a certificate:

```bash
curl http://localhost:3000/fetch/17
```
