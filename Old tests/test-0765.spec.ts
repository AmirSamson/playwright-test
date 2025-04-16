import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * صفحه بنفش رنگ مربوط به اکانت پاد به کاربر نشان داده می شود.
 * کاربر روی دکمه "ورود با حساب پاد" کلیک میکند
 * کاربر اکانت خود را وارد میکند
 * نتیجه
 * باید کاربر به صفحه اصلی هدایت شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);
  await page1.locator('[placeholder="نام کاربری \\/ تلفن \\/ ایمیل \\/ کدملی"]').click();
  await page1.locator('[placeholder="نام کاربری \\/ تلفن \\/ ایمیل \\/ کدملی"]').fill('amir.samson');
  await page1.locator('[placeholder="نام کاربری \\/ تلفن \\/ ایمیل \\/ کدملی"]').press('Tab');
  await page1.locator('[placeholder="رمز عبور"]').fill('amir201372');
  await Promise.all([
    page1.waitForNavigation(),
    page1.locator('[placeholder="رمز عبور"]').press('Enter')
  ]);
  await page.goto('https://dev.playpod.ir/');
  await expect(page).toHaveURL('https://dev.playpod.ir/');
});
