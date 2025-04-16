import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click text=ورود
  await page.locator('text=ورود').click();

  // Click text=شرایط و قوانین
  await page.locator('text=شرایط و قوانین').click();

  // Click text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و  >> #Design_by_Hamed_Mehrali
  await page.locator('text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و  >> #Design_by_Hamed_Mehrali').click();

  await page.screenshot({path: `./test/screenshots/test.1566.jpg`})

});