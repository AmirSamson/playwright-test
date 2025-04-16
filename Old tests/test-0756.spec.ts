import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * با کلیک روی دکمه "ضربدر"
 * نتیجه
 * باید صفحه اصلی اکانت پاد نمایش داده شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('text=شرایط و قوانین').click();
  await page.locator('text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و  >> #Design_by_Hamed_Mehrali').click();
  await expect(page.locator('div[role="dialog"] div:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}لطفا شماره تلفن همراه خود را وارد کنید تا کد")')).toBeVisible();});