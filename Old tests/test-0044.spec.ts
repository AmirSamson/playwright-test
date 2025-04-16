import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
 
    // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click text=ورود
  await page.locator('text=ورود').click();

  // Click text=ورود با حساب کاربری پاد
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);

  // Click [placeholder="نام\ کاربری\ \/\ تلفن\ \/\ ایمیل\ \/\ کدملی"]
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();

  // Fill [placeholder="نام\ کاربری\ \/\ تلفن\ \/\ ایمیل\ \/\ کدملی"]
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

  await page.waitForTimeout(5000);

  await page.locator('.sc-bOtlzW').screenshot({path:'./test/screenshots/test.profile.44-1.test.ts.jpg'});

  await page.waitForTimeout(2000);

  // Click text=ویرایش >> nth=1
  await page.locator('text=ویرایش').nth(1).click();
  // Click textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")
  await page.locator('textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")').click();

  // Click textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")
  await page.locator('textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")').click();
  // Fill textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")
  await page.locator('textarea:has-text("سسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسثپخیوپ")').fill(' سلام\n\n\n\nینینسمسهسنسپسثپخیوپ');

  // Click div[role="none\ presentation"]:has-text("ویرایش درباره منسسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسث")
  await page.locator('div[role="none\\ presentation"]:has-text("ویرایش درباره منسسسسسسسمصصممصممثم سننبنیخسمیدتیپصپویمچب بپنیمیمسی ینینسمسهسنسپسث")').click();

  await page.waitForTimeout(3000);

  await page.screenshot({path:'./test/screenshots/test.profile.44-2.test.ts.jpg'});
  
});