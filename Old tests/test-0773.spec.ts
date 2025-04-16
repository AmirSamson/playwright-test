import { expect, test } from '@playwright/test';

test.setTimeout(100000);
/**
 * کاربر روی دکمه تنظیمات کلیک کند
 * صفحه پروفایل نمایش داده شود.
 * روی دکمه "افزایش موجودی" کلیک کند
 * نتیجه
 * باید صفحه مربوط به افزایش موجودی باز شود
 */
test('test', async ({ page }) => {
  await page.goto('https://dev.playpod.ir/');
  await page.locator('text=ورود').click()
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=ورود با حساب کاربری پاد').click()
  ]);
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();
  await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('amir.samson');
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
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=کیف پول پادموجودی0 تومانافزایش موجودی >> div').nth(4).click()
  ]);
  await page2.goto('https://sandbox.pod.ir:1033/v1/pbc/buycredit?key_id=14237337e3479fd71648363422&access_token=3674d77870884688abad6bfe06a82244&timestamp=1648363426183&signature=ZV9d%2FqqmYIIUDRmVLWKB1KYIEUNezblJIFEniBpxekxM9vpZiRiE4qlnYkDeFjzVFtY2ozm4QLfZFlOoPj8BNpn5nI98wO7y02t6w7NhqRewkTwEntPdTkcqu198cOTJVB1dqPl2KWwEsNUshS9WZHE%2BzL%2F3Avc58hkNNnM2OPboH9RZfU5KkEzx2fXNE8qu%2Fi5UE5E%2F2Dgc5UlpcQFXBVtQ%2FDZbQdbsy0chY%2BPloQ%2FuHD%2BLFv1vpsp5LvISC64kFIESmZGj2bh0KSS7coYZYC5ItZ46J1uA%2BPgU1S6aHw7%2FjwFByjY%2Fz0n%2BD7xMbprhTFiweaX6Dq09gixU4pkjiQ%3D%3D');
  await expect(page2).toHaveURL('https://sandbox.pod.ir:1033/v1/pbc/buycredit?key_id=147369331ee1a99a1651232818&access_token=10d2b0ae08fd487ab45a8fc83e056ee6&timestamp=1651232819709&signature=GmYkKtjlVTtRtXw2yS9EIJUjbK%2FLdkiy8prJLG5UKWaCBnTisyyDOzLwyskNjC8gWTFKiwrxoqttw8GbmCXMYnqTmf5vj43XmLA%2BOEiO9yPvEOSgF0gVbHmJlYd6OrapIGYfZzTKBieS44h8xRC80yVgzlOZviFd4X9NFKt0aYaclDRnHRchChwDA5id16qNb57mrsVTodFKqlcidEFCY9BynbbLLSwsJdLCAmxmlOSU%2FpWFfFyu09RzHwIX9Aj3%2BncUBe3KU1QNq9qVp6ns%2F7swf7pEv729g88Q4zwvQUuUGzVPIIuENcZ4MJc8AICwpxCvUxNBh7d2VoXuk%2FDyFA%3D%3D');
});