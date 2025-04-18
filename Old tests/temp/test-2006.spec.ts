import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://dev.playpod.ir/');
    const text = await page.locator('h2.sc-fTQvRK.cAaFPp.h2').innerText();
    expect(text).toBe('بازی های پیشنهادی');

    await page.waitForTimeout(3000);
    await page.locator('h2.sc-fTQvRK.cAaFPp.h2').click();
    await page.locator('h2.sc-fTQvRK.cAaFPp.h2').screenshot({ path: './test/screenshots/expectTest.jpg' })

});