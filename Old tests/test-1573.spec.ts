 import { test, expect } from '@playwright/test';

test('test', async () => {
    
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click text=ورود
  await page.locator('text=ورود').click();

  // Click [placeholder="مثال\ \:\ 09123456789"]
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();

  // Press Insert
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').press('Insert');

  // Press PageUp
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').press('PageUp');

  // Press PageDown
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').press('PageDown');

  // Press Insert
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').press('Insert');

  // Click [placeholder="مثال\ \:\ 09123456789"]
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();

  // Press NumLock
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').press('NumLock');

  // Fill [placeholder="مثال\ \:\ 09123456789"]
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').fill('09302706365');

  // Click text=ادامه
  await page.locator('text=ادامه').click();

  // Click text=تغییر شماره تلفن همراه
  await page.locator('text=تغییر شماره تلفن همراه').click();

  await page.screenshot({path: `./test/screenshots/test.1573.jpg`})

  await context.close();
  await browser.close();

});