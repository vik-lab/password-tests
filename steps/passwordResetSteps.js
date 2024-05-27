const {
  Given,
  When,
  Then,
  setDefaultTimeout,
  BeforeAll,
  AfterAll,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import passwordResetPage from "./passwordResetPage";

let browser;
let page;
//let passwordResetPage;

// Set default timeout to 30 seconds to give more time for page to load and elements to appear
setDefaultTimeout(30 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
});

AfterAll(async () => {
  await browser.close();
});

Given("I am on the login page", async function () {
  page = await browser.newPage();
  await page.goto("https://membersvic.returnit.com.au/", {
    waitUntil: "networkidle",
  });
});

When("I click the forgot password link", async function () {
  await page
    .getByRole(
      "link",
      { name: "Forgot password?" },
      { waitUntil: "networkidle" }
    )
    .click();
  //await page.waitForSelector('input[name="email"]', { timeout: 10000 }); // Wait for the email input to be visible
});

When("I enter a valid email address", async function () {
  try {
    await page.fill('input[name="email"]', "valid@example.com");
  } catch (error) {
    throw error;
  }
});

When("I enter an invalid email address", async function () {
  try {
    await page.fill('input[name="email"]', "invalid@example");
  } catch (error) {
    throw error;
  }
});

When("I click the continue button", async function () {
  try {
    await page.getByRole("button", { name: "Continue" }).click();
  } catch (error) {
    throw error;
  }
});

Then("I should see a confirmation message", async function () {
  await page.getByText("Please check the email", { timeout: 10000 }); // Wait for the confirmation message to be visible
});

Then("I should see an error message", async function () {
  await page.getByText("Email is not valid.", { timeout: 10000 }); // Wait for the error message to be visible
});
