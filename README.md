# AutoAnchorScrollApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

### Running the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --no-watch --code-coverage` to excute report coverage results without browser open.

### Running ESLint

Run `ng lint` to check code is pass linting via [ESLint](https://eslint.org/).

### Running Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

```

auto-anchor-scroll-app/
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  ├─ core/
│  │  │  ├─ directives/
│  │  │  ├─ services/
│  │  ├─ pages/
│  ├─ assets/

```

## Continues Integration

1. Checkout code: Fetch the latest code from the version control system.
2. Setup NodeJS: Install current version are project running
3. Install dependencies: Install all depencies in package.json
4. Build application: Compile the code and resolve dependencies.
5. ESLint and Prettierrc: Check code quality is pass lintting and .prettierrc
6. Unit Test: Execute various tests to ensure code correctness.

These stages ensure a systematic and efficient build and test process in the CI pipeline.