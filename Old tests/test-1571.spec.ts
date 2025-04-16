import { test, expect } from '@playwright/test';
test.setTimeout(120000);

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

  // Fill input >> nth=0
  await page.locator('input').first().fill('0');

  // Fill input:nth-child(2)
  await page.locator('input:nth-child(2)').fill('0');

  // Fill input:nth-child(3)
  await page.locator('input:nth-child(3)').fill('0');

  // Fill input:nth-child(4)
  await page.locator('input:nth-child(4)').fill('0');

  // Fill input:nth-child(5)
  await page.locator('input:nth-child(5)').fill('0');

  // Fill input:nth-child(6)
  await page.locator('input:nth-child(6)').fill('0');

  await page.screenshot({path: `./test/screenshots/test.1571.jpg`})
  
});