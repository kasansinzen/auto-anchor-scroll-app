# AutoAnchorScrollApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

### Running the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:coverage` to excute unit tests report coverage results without browser open.
Run `npm run test:ci` to excute for unit tests continues integration.

### Running ESLint

Run `npm run lint` to check code is pass linting via [ESLint](https://eslint.org/).
Run `npm run lint:fix` automatic fix ESLint required.

### Running Stylelint

Run `npm run stylelint` to check code is pass stylelint via [Stylelint](https://stylelint.io/).
Run `npm run stylelint:fix` automatic fix stylelint required.

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
6. Stylelint: Check code quality is pass stylelint
7. Unit Test: Execute various tests to ensure code correctness.

These stages ensure a systematic and efficient build and test process in the CI pipeline.