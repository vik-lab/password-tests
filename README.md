# Password Reset Test

This project contains automated tests for the password reset flow on the Return-It member site using Cucumber and Playwright.

## Installation

1. download / clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   npm install
   npm install playwright @cucumber/cucumber @playwright/test

# Running the Tests

To execute the tests, run:
npx cucumber-js

# Generate a html report:

node generate-report.js

Directory Structure
features/: Contains the Cucumber feature files.
steps/: Contains the step definition files.
playwright.config.js: Configuration for Playwright.
cucumber.js: Configuration for Cucumber.

# improvements

move the objects into contructor and use it in the stepdefinitions to have cleaner code
room to add performance checks
