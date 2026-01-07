# Node.js Boilerplate

A simple and efficient boilerplate for modern Node.js applications, preconfigured with `tsdown`, ESLint, and Prettier.

## Features

- **Modern JavaScript Support**: Fast bundling and transpilation using `tsdown`.
- **Linting & Formatting**: Preconfigured ESLint and Prettier for consistent code style.
- **Development Mode**: Auto-reload using Node.js built-in `--watch` and `tsdown` watch mode.
- **Environment Variables**: Managed via `dotenv`.
- **Docker Support**: Ready-to-use Dockerfile for containerized deployment.
- **Source Maps**: Enabled for easier debugging.

## Prerequisites

- **Node.js**: v24 or later (recommended).
- **npm**: v10 or later.

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/pyroarsonist/nodejs-boilerplate.git
cd nodejs-boilerplate
npm install
```

### 2. Configuration

Create a `.env` file in the root directory and add your environment variables:

```bash
cp .env.example .env # If an .env.example exists
```

### 3. Available Scripts

- `npm run start:dev`: Start the application in development mode with auto-reload.
- `npm run build`: Build the application for production.
- `npm run start`: Run the built application.
- `npm run lint`: Run ESLint to check and fix code style issues.

## Docker

Build and run the application using Docker:

```bash
docker build -t nodejs-boilerplate .
docker run nodejs-boilerplate
```

## License

This project is licensed under the MIT License.
