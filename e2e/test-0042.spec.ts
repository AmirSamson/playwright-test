import { test, expect } from '@playwright/test';
test.setTimeout(100000);

test('test', async ({ page }) => {


  await page.goto('https://dev.playpod.ir/');

  await page.locator('text=ورود').click();

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);

  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();

  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('amir.samson');

  // Click [placeholder="رمز\ عبور"]
  await page1.locator('[placeholder="رمز\\ عبور"]').click();

  // Fill [placeholder="رمز\ عبور"]
  await page1.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');

  // Click text=نام کاربری تلفن ایمیل کدملی رمز عبور خود را وارد نمایید. ورود >> button[name="go"]
  await Promise.all([
    page1.waitForNavigation(/*{ url: 'https://servicestest.playpod.ir/page/login?code=77157c4c0bf94253b517a75efbcb7912' }*/),
    page1.locator('text=نام کاربری تلفن ایمیل کدملی رمز عبور خود را وارد نمایید. ورود >> button[name="go"]').click()
  ]);

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click .st1-user-icon >> nth=0
  await page.locator('.st1-user-icon').first().click();

  // Click .sc-hoHwyw
  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');

  await page.waitForTimeout(3000);

  // Click text=ویرایش >> nth=1
  await page.locator('text=ویرایش').nth(1).click();
 
  await page.locator('textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")').click();

  await page.screenshot({path:'./test/screenshots/test.profile.42.test.ts.jpg'});
 
});