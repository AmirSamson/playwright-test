import { test, expect, chromium } from '@playwright/test';
test.setTimeout(100000);

test('test', async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://srm.semnan.ac.ir/');
    await page.fill("input[name=std_no]", '9812722005');
    await page.fill("input[name=password]", 'khan2006');
    await page.click('"ورود به سیستم"');
    await expect(page).toHaveURL('https://srm.semnan.ac.ir/dashboard')
    await page.waitForTimeout(5000);
    await page.screenshot({ path: './test/.jpg' });

});