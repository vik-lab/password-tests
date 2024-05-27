// passwordResetPage.js (Module)
class PasswordResetPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://membersvic.returnit.com.au/", {
      waitUntil: "networkidle",
    });
  }

  async clickForgotPasswordLink() {
    await this.page.getByRole("link", { name: "Forgot password?" }).click();
  }

  async enterEmail(email) {
    await this.page.fill('input[name="email"]', email);
  }

  async clickContinueButton() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async checkConfirmationMessage() {
    //await this.page.waitForSelector('text="Please check the email"',
    await this.page.getByText("Please check the email"),
      //await page.getByRole('button', { name: 'Resend email' }).click();
      {
        waitUntil: "networkidle",
      };
    //);
  }

  async checkErrorMessage() {
    await this.page.waitForSelector('text="Email is not valid."', {
      timeout: 10000,
    });
  }
}

module.exports = PasswordResetPage;
