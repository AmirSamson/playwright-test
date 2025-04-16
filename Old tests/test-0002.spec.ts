import { test, expect } from '@playwright/test';
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
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('09109790415');

  // Press Tab
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').press('Tab');

  // Fill [placeholder="رمز\ عبور"]
  await page1.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');

  // Click text=نام کاربری تلفن ایمیل کدملی رمز عبور خود را وارد نمایید. ورود >> button[name="go"]
  await Promise.all([
    page1.waitForNavigation(/*{ url: 'https://servicestest.playpod.ir/page/login?code=3afd7561a2fa40c987722386861c2d05' }*/),
    page1.locator('text=نام کاربری تلفن ایمیل کدملی رمز عبور خود را وارد نمایید. ورود >> button[name="go"]').click()
  ]);

  // Go to https://dev.playpod.ir/
  await page.goto('https://dev.playpod.ir/');

  // Click .st1-user-icon >> nth=0
  await page.locator('.st1-user-icon').first().click();

  // Click .sc-hoHwyw
  await page.locator('.sc-hoHwyw').click();
  await expect(page).toHaveURL('https://dev.playpod.ir/profile');

  await page.waitForTimeout(4000);

  // Click text=کیف پول پادموجودی0 تومانافزایش موجودی >> div >> nth=4
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=کیف پول پادموجودی0 تومانافزایش موجودی >> div').nth(4).click()
  ]);

  await page.waitForTimeout(15000);

  // Go to https://sandbox.pod.ir:1033/v1/pbc/buycredit?key_id=14237337e3479fd71648363422&access_token=3674d77870884688abad6bfe06a82244&timestamp=1648363426183&signature=ZV9d%2FqqmYIIUDRmVLWKB1KYIEUNezblJIFEniBpxekxM9vpZiRiE4qlnYkDeFjzVFtY2ozm4QLfZFlOoPj8BNpn5nI98wO7y02t6w7NhqRewkTwEntPdTkcqu198cOTJVB1dqPl2KWwEsNUshS9WZHE%2BzL%2F3Avc58hkNNnM2OPboH9RZfU5KkEzx2fXNE8qu%2Fi5UE5E%2F2Dgc5UlpcQFXBVtQ%2FDZbQdbsy0chY%2BPloQ%2FuHD%2BLFv1vpsp5LvISC64kFIESmZGj2bh0KSS7coYZYC5ItZ46J1uA%2BPgU1S6aHw7%2FjwFByjY%2Fz0n%2BD7xMbprhTFiweaX6Dq09gixU4pkjiQ%3D%3D
  await page2.goto('https://sandbox.pod.ir:1033/v1/pbc/buycredit?key_id=14237337e3479fd71648363422&access_token=3674d77870884688abad6bfe06a82244&timestamp=1648363426183&signature=ZV9d%2FqqmYIIUDRmVLWKB1KYIEUNezblJIFEniBpxekxM9vpZiRiE4qlnYkDeFjzVFtY2ozm4QLfZFlOoPj8BNpn5nI98wO7y02t6w7NhqRewkTwEntPdTkcqu198cOTJVB1dqPl2KWwEsNUshS9WZHE%2BzL%2F3Avc58hkNNnM2OPboH9RZfU5KkEzx2fXNE8qu%2Fi5UE5E%2F2Dgc5UlpcQFXBVtQ%2FDZbQdbsy0chY%2BPloQ%2FuHD%2BLFv1vpsp5LvISC64kFIESmZGj2bh0KSS7coYZYC5ItZ46J1uA%2BPgU1S6aHw7%2FjwFByjY%2Fz0n%2BD7xMbprhTFiweaX6Dq09gixU4pkjiQ%3D%3D');

  await page.waitForTimeout(5000);

  await page.locator('text=کیف پول پادموجودی0 تومانافزایش موجودی').screenshot({path:'./test/screenshots/test.profile.2.3.4.test.ts.jpg'});

});