class PasswordResetPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    //await this.page.goto("https://membersvic.returnit.com.au/");
    await page.goto("https://membersvic.returnit.com.au/");
  }

  async clickOnForgotLink() {
    await this.page.getByRole("link", { name: "Forgot password?" }).click();
  }

  async enterEmail(email) {
    await this.page.fill('input[name="email"]', email);
  }

  async submitForm() {
    await this.page.getByRole("button", { name: "Continue" }).click();
    //await this.page.click('button[type="submit"]');
  }

  async isSuccessMessageVisible() {
    //return await this.page.isVisible('.success-message');
    return await page.getByText("Please check the email"); // Wait for the confirmation message to be visible
  }

  async isErrorMessageVisible() {
    return await page.getByText("Email is not valid."); // Wait for the confirmation message to be visible
  }
  // Add other methods as needed
}

module.exports = PasswordResetPage;
