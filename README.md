# node-boilerplate

This project is set up to have TypeScript source code (in `src`) compile to JavaScript (in `dist/src`) to be executed. Mocha tests are also written in TypeScript (in `test`) and compiled to JavaScript (in `dist/test`) to be executed by Istanbul via the `nyc` command, producing code coverage reports in the terminal and an HTML report in the `coverage` directory.

## npm scripts

**build** - Compiles the program source code and test source code.
**test** - First runs `build`, then uses `nyc` to run the test compiled code, producing coverage reports.

## VS Code

The project also includes a basic configuration for VS Code. The `settings.json` tells VS Code to use the project's TypeScript SDK instead of VS Code's, and the `launch.json` includes launch configurations for debugging the program source code ("Launch Program") and test source code ("Launch Tests").

## Test coverage reports

Two Istanbul reporters are used:

**text** - Produces output in the terminal:

![https://i.imgur.com/nKKkihs.png](test1)

**lcov** - Produces IDE gutter instrumentation and an HTML report (in `coverage/lcov-report`):

![https://i.imgur.com/0DIGZ2k.png](test2)
![https://i.imgur.com/WrS1If0.png](test3)