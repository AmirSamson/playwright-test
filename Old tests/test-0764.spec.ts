import { expect, test } from '@playwright/test';

/**
 * Description 
 * کاربر بر روی دکمه "ورود" کلیک میکند.
 * صفحه بنفش رنگ مربوط به اکانت پاد به کاربر نشان داده می شود.
 * کاربر در تکست باکس مربوطه شماره تلفن را وارد میکند.
 * کاربر روی ادامه کلیک میکند.
 * صفحه احراز هویت باز می شود.
 * کد برای کاربر ارسال میشود.
 * کاربر 2 دقیقه محلت دارد کد را وارد کند.
 * دو دقیقه محلت کاربر تمام میشود. اگر مهلت 2 دقیقه کاربر تمام شود .
 * نتیجه
 * باید دکمه ارسال مجدد فعال شود.
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').click();
  await page.locator('[placeholder="مثال\\ \\:\\ 09123456789"]').fill('09302706365');
  await page.locator('text=ادامه').click();
  await page.locator('text=تغییر شماره تلفن همراه').click();
  await page.waitForTimeout(180000);
  await expect(page.locator('text=کد فعالسازی را دریافت نکردید؟')).toBeVisible();
  await page.locator('button:has-text("ارسال مجدد")').click();
  await expect(page.locator('text=کد ۶ رقمی ارسال شده به شماره 09302706365 را وارد کنید')).toBeVisible();
});