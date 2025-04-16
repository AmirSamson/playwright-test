import { expect, test } from '@playwright/test';

/**
 * description
 * کاربر روی دکمه تنظیمات کلیک کند
 * صفحه پروفایل نمایش داده شود
 * کاربر روی دکمه "خرید اشتراک" کلیک میکند
 * نتیجه
 * باید کادر که شامل دکمه "حمایت از پلی پاد" و متن"با حمایت ما را در ادامه راه یاری کنید" نمایش داده شود
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('09109790415');
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').press('Tab');
  await page1.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');
  await Promise.all([
    page1.waitForNavigation(),
    page1.locator('text=نام کاربریتلفنایمیلکدملیرمز عبور خود را وارد نمایید.ورود >> button[name="go"]').click()
  ]);
  await page.goto('https://dev.playpod.ir/');
  await page.locator('.st1-user-icon').first().click();
  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');
  await page.locator('text=.st0{fill:#303134;} .st1{opacity:0.8;} .st2{fill:#FFFFFF;} با حمایت ما را در ادا >> a').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/donate');
});