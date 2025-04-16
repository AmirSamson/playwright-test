import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * صفحه بنفش رنگ مربوط به اکانت پاد به کاربر نشان داده می شود.
 * کاربر در تکست باکس مربوطه شماره تلفن را وارد میکند.
 * کاربر روی ادامه کلیک میکند.
 * صفحه احراز هویت باز می شود.
 * کاربر روی دکمه "تغییر شماره تلفن کلیک میکند.
 * نتیجه
 * باید صفحه احراز هویت بسته و صفحه پاد باز شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').fill('09302706365');
  await page.locator('text=ادامه').click();
  await page.locator('text=تغییر شماره تلفن همراه').click();
  await expect(page.locator('div[role="dialog"] div:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}لطفا شماره تلفن همراه خود را وارد کنید تا کد")')).toBeVisible();
});