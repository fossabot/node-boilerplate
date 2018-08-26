# node-boilerplate

This project is set up to have TypeScript source code (in `src`) compile to JavaScript (in `dist/src`) to be executed. Mocha tests are also written in TypeScript (in `test`) and compiled to JavaScript (in `dist/test`) to be executed by Istanbul via the `nyc` command, producing code coverage reports in the terminal and an HTML report in the `coverage` directory.

The project does not use ts-node.

## tsconfig.json

The `tsconfig.json` file in this project is based on that of Microsoft's [TypeScript-Node-Starter project](https://github.com/Microsoft/TypeScript-Node-Starter). Notable changes include modifying the `include` property to include the test source code directory.

## npm scripts

- **build** - Compiles the program source code and test source code.
- **test** - First runs `build`, then uses `nyc` to run the test compiled code, producing coverage reports.

## VS Code

The project also includes a basic configuration for VS Code. The `settings.json` tells VS Code to use the project's TypeScript SDK instead of VS Code's, and the `launch.json` includes launch configurations for debugging the program source code ("Launch Program") and test source code ("Launch Tests").

## Test coverage reports

Two Istanbul reporters are used:

- **text** - Produces output in the terminal:

![test1](https://i.imgur.com/nKKkihs.png)

- **lcov** - Produces IDE gutter instrumentation and an HTML report (in `coverage/lcov-report`):

![test2](https://i.imgur.com/0DIGZ2k.png)
![test3](https://i.imgur.com/WrS1If0.png)