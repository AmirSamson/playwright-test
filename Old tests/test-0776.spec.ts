import { expect, test } from '@playwright/test';

test.setTimeout(100000);

/**
 * description
 * کاربر روی دکمه تنظیمات کلیک کند
 * صفحه پروفایل نمایش داده شود
 * کاربر روی دکمه "خرید اشتراک" کلیک میکند
 * نتیجه
 * باید صفحه ای در کنار بسته انتخاب شده که شامل اطاعات خرید (قیمت،تخفیف،کد تخفیفو...) میشود نمایش داده شود
 */
 test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('amir.samson');
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').press('Tab');
  await page1.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');
  await Promise.all([
    page1.waitForNavigation(/*{ url: 'https://servicestest.playpod.ir/page/login?code=e41fed4e796b471196208fc9bfc1b82e' }*/),
    page1.locator('text=نام کاربریتلفنایمیلکدملیرمز عبور خود را وارد نمایید.ورود >> button[name="go"]').click()
  ]);
  await page.goto('https://dev.playpod.ir/');
  await page.locator('.st1-user-icon').first().click();
  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');
  await page.locator('text=خرید اشتراک').nth(1).click();
  await expect(page.locator('text=بستنپرداخت ویژگی ها۳ ساعت امکان بازی در روزانتظار کمتر در صف ورود به بازی رایگان')).toBeVisible();
});