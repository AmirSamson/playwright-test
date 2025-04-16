import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
 
    
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click();

  
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);

  
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();

  // Fill [placeholder="نام\ کاربری\ \/\ تلفن\ \/\ ایمیل\ \/\ کدملی"]
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('eri13');

  await page1.locator('[placeholder="رمز\\ عبور"]').click();

  await page1.locator('[placeholder="رمز\\ عبور"]').fill('920325nasrin');

  await Promise.all([
    page1.waitForNavigation(/*{ url: 'https://servicestest.playpod.ir/page/login?code=77157c4c0bf94253b517a75efbcb7912' }*/),
    page1.locator('text=نام کاربری تلفن ایمیل کدملی رمز عبور خود را وارد نمایید. ورود >> button[name="go"]').click()
  ]);

  await page.goto('https://dev.playpod.ir/');

  await page.locator('.st1-user-icon').first().click();

  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');

  await page.waitForTimeout(5000);
  await page.locator('button:text("افزایش موجودی"):visible').click();
  await page.locator('button >> visible=true').click();


  await page.screenshot({path:'./test/screenshots/test.profile.56666.test.ts.jpg'});
  
});