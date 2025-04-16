import { expect, test } from '@playwright/test';

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
  await page.locator('#root svg:has-text(".st0-user-icon{fill-rule:evenodd;clip-rule:evenodd;fill:#B3B3B3;} .st1-user-icon")').click();
  await expect(page.locator('ul[role="menu"] div:has-text(".st0-user-icon{fill-rule:evenodd;clip-rule:evenodd;fill:#B3B3B3;} .st1-user-icon")')).toBeVisible();
});