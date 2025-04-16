import { test } from '@playwright/test';
test.setTimeout(100000);

test('test', async ({ page }) => {

    await page.goto('https://playpod.ir/');
    await page.click('"ورود"');
    await page.waitForLoadState()
    await page.screenshot({ path: './test/screenshots/aaaprofile.jpg' });

});