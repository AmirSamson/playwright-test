import { expect, test } from '@playwright/test';

test.setTimeout(100000);

/**
 * Description
 * کاربر روی دکمه تنظیمات کلیک کند
 * صفحه پروفایل نمایش داده شود. میزان موجودی بیشتر از 0 باشد
 * نتیجه
 * باید در کادر کیف پول پاد
 * میزان موجودی به درستی نمایش داده شود
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  const [pagePopup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);
  await pagePopup.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();
  await pagePopup.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('amir.samson');
  await pagePopup.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').press('Tab');
  await pagePopup.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');
  await Promise.all([
    pagePopup.waitForNavigation(),
    pagePopup.locator('text=نام کاربریتلفنایمیلکدملیرمز عبور خود را وارد نمایید.ورود >> button[name="go"]').click()
  ]);
  await page.goto('https://dev.playpod.ir/');
  await page.locator('.st1-user-icon').first().click();
  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');
  await expect(page.locator('text=کیف پول پادموجودی122,255.8 تومانافزایش موجودی')).not.toContainText('0 تومان');
});