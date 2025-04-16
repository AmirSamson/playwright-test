import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * با کلیک روی دکمه "ضربدر"
 * نتیجه
 * باید پنجره "قوانین و مقررات" بسته شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('text=شرایط و قوانین').click();
  await page.locator('text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و  >> #Design_by_Hamed_Mehrali').click();
  await expect(page.locator('text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و ')).not.toBeVisible();
});
