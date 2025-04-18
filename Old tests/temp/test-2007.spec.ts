import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
   await page.goto("https://dev.playpod.ir/");
   await page.locator("text=ورود").click();
   // 
   const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=ورود با حساب کاربری پاد').click()
    ]);
    await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').click();
    await page1.locator('[placeholder="نام\\ کاربری\\ \\/\\ تلفن\\ \\/\\ ایمیل\\ \\/\\ کدملی"]').fill('amir.samson');
    await page1.locator('[placeholder="رمز\\ عبور"]').click();
    await page1.locator('[placeholder="رمز\\ عبور"]').fill('amir201372');
    await Promise.all([
      page1.waitForNavigation(/*{ url: 'https://servicestest.playpod.ir/page/login?code=77157c4c0bf94253b517a75efbcb7912' }*/),
      page1.locator('button.btn.btn-lg').click()
    ]);
   await page.locator(".st1-user-icon").first().click();
   await page.locator(".sc-hoHwyw").click();
   await expect(page).toHaveURL("https://dev.playpod.ir/profile");
   expect(await page.locator("sc-knKHOI")).toBeDefined();
   //expect(await page.locator("sc-knKHOI").innerText()).toBe("شما از امکانات رایگان استفاده میکنید و اشتراک ندارید.");

   await page.waitForLoadState("networkidle");
  await page.waitForLoadState("load");
  await page.waitForLoadState("domcontentloaded");
  expect(await page.screenshot()).toMatchSnapshot();
});