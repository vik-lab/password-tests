import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByLabel('Email address*').click();
  await page.getByLabel('Email address*').fill('test@test.com');
  await page.getByLabel('Email address*').press('Enter');
  await page.getByText('Check Your Email').click();
  await page.getByText('Please check the email').click();
  await page.getByRole('button', { name: 'Resend email' }).click();
});