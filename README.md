# 🧰 Simple TypeScript Starter | 2022

> We talk about a lot of **advanced Node.js and TypeScript** concepts on [the blog](https://khalilstemmler.com), particularly focused around Domain-Driven Design and large-scale enterprise application patterns. However, I received a few emails from readers that were interested in seeing what a basic TypeScript starter project looks like. So I've put together just that.

### Features

- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

### Scripts

#### `pnpm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `pnpm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `pnpm run build`

Builds the app at `build`, cleaning the folder first.

#### `pnpm run test`

Runs the `jest` tests once.

#### `pnpm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `pnpm run prettier-format`

Format your code.

#### `pnpm run prettier-watch`

Format your code in watch mode, waiting for file changes.
