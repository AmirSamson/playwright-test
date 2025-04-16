import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * نتیجه
 * باید صفحه مربوط به اکانت پاد به کاربر نشان داده شود
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await expect(page.locator('div[role="dialog"] div:has-text(".cls-1{fill:none;}.cls-2{fill:#fff;}لطفا شماره تلفن همراه خود را وارد کنید تا کد")')).toBeVisible();
});