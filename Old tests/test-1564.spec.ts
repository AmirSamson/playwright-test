import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click text=ورود
  await page.locator('text=ورود').click();

  // Click div[role="dialog"] div:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}لطفا شماره تلفن همراه خود را وارد کنید تا کد")
  await page.locator('div[role="dialog"] div:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}لطفا شماره تلفن همراه خود را وارد کنید تا کد")').click();
 
  await page.screenshot({path: './test/screenshots/test.1564.jpg'})
});

