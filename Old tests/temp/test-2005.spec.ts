import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

   const browser = await chromium.launch({ headless: false });
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto('https://dev.playpod.ir/');
   await page.locator('text=ورود').click();
   await page.locator('text=ورود با حساب کاربری پاد').click()

   const [page1] = await Promise.all([
      page.waitForEvent('popup'),
   ]);
   await page1.click("input[name=identity]")
   await page1.fill("input[name='identity]", 'amir.samson')
   await page1.screenshot({ path: './test/screenshots/inputs2.jpg' })

});