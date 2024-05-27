// passwordResetSteps.js (Step Definitions)
const {
  Given,
  When,
  Then,
  setDefaultTimeout,
  BeforeAll,
  AfterAll,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const PasswordResetPage = require("./passwordResetPage");

let browser;
let page;
let passwordResetPage;

setDefaultTimeout(30 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
});

AfterAll(async () => {
  await browser.close();
});

Given("I am on the login page", async function () {
  page = await browser.newPage();
  passwordResetPage = new PasswordResetPage(page);
  await passwordResetPage.navigate();
});

When("I click the forgot password link", async function () {
  await passwordResetPage.clickForgotPasswordLink();
});

When("I enter a valid email address", async function () {
  await passwordResetPage.enterEmail("valid@example.com");
});

When("I enter an invalid email address", async function () {
  await passwordResetPage.enterEmail("invalid@example");
});

When("I click the continue button", async function () {
  await passwordResetPage.clickContinueButton();
});

Then("I should see a confirmation message", async function () {
  await passwordResetPage.checkConfirmationMessage();
});

Then("I should see an error message", async function () {
  await passwordResetPage.checkErrorMessage();
});
