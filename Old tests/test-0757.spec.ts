import { expect, test } from '@playwright/test';

/**
 * این تست کلی برای وارد کردن شماره تلفن توسط کاربر است. و فرآیند به صورت کلی از ابتدا بررسی شده است. 
 */
/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * صفحه بنفش رنگ مربوط به اکانت پاد به کاربر نشان داده می شود.
 * کاربر در تکست باکس مربوطه شماره تلفن را وارد میکند.
 * نتیجه
 * باید بتواند شماره تلفن خود را وارد کند.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').fill('09302706365');
  await page.locator('text=ادامه').click();
  await expect(page.locator('div[role="dialog"] svg:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}")')).toBeVisible();
});