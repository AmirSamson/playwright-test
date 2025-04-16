import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click text=ورود
  await page.locator('text=ورود').click();

  // Click [placeholder="مثال\ \:\ 09123456789"]
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();

  // Fill [placeholder="مثال\ \:\ 09123456789"]
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').fill('09302706365');

  // Click text=ادامه
  await page.locator('text=ادامه').click();

  await page.screenshot({path: `./test/screenshots/test.1568.jpg`})
});