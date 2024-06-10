# End-to-End Testing Documentation

## Introduction

This repository contains end-to-end (e2e) automated tests for a e-commerce platform (registration, login, searching products). The structure or project is based on BDD Scenarios as test cases, Page Object Modals and Cypress. For this project also is used demo version of Mailosaur (https://mailosaur.com/) to get verification code in registration process.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Cypress (latest version)
- TypeScript
- Cucumer from '@badeball/cypress-cucumber-preprocessor'
- I recommend add also a plugin 'Cucumber (Gherkin)' to VSC IDE to display properly BDD Scenarios

### Installation

1. Clone the repository.
2. Navigate to the project's root directory.
3. Run `npm install` to install all required dependencies.

### Configuration

Create a `cypress.env.json` file based on `cypress.env.sample.json`, filling in environment-specific variables and credentials. I prepared my test cases for "BASE_URL": "https://www.decathlon.pl/".

## Running Tests

To run the tests, execute:

```Bash
npx cypress open
```

This launches the Cypress Test Runner.

## Test Description

### Automated Test for Searching Products

- File: SearchingProducts.feature
- Functionality: Test cases for searching and filter products in e-commerce.
  This type of file contains BDD Scenarios or Scenarios Outlines with Examples.

## Page Object Models (POM)

- **Location:** `steps/pages/`
- **Examples:**
  pageOject.ts files contains functions which are used in steps definitions.

## Steps Definitions

- **Location** `steps/stepsDefinitions/`
  spec.ts files contains steps which are used for scenarios.

## Configuration and Notes

- Configurations are managed through `roles.config` and `globalVariables.config`.
- The tests utilize `cypress.env.json` for environment-specific settings.

Unfortunetly it was difficult to write e2e tests for this e-commerce I chose (https://www.decathlon.pl/) and I wasn't able to bypass security (like too many requests 429 or passing verification code during login than just password). That's why I left some test cases commented, probably they can be used with specific configuration (I mean login - it should work this way as this test case is created, but due to security it doesn't work). Also I had to use classes or other not perfect selector, because there aren't '[data-cy=perfectSelector]'.
