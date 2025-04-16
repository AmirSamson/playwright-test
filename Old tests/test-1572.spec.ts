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

  // Click text=.cls-1{fill:none;}.cls-2{fill:#fff;}کد ۶ رقمی ارسال شده به شماره 09302706365 را  >> #Design_by_Hamed_Mehrali
  await page.locator('text=.cls-1{fill:none;}.cls-2{fill:#fff;}کد ۶ رقمی ارسال شده به شماره 09302706365 را  >> #Design_by_Hamed_Mehrali').click();

  await page.screenshot({path: `./test/screenshots/test.1572.jpg`})
  
});