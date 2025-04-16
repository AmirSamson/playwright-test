import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * نتیجه
 * با کلیک بر روی "شرایط و قوانین" باید پنجره "قوانین و مقررات" نمایش داده شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('text=شرایط و قوانین').click();
  await expect(page.locator('text=قوانین و مقرراتشرایط استفادهکلیه بازدید کنندگان با انجام ثبت نام، کلیه قوانین و ')).toBeVisible();
});