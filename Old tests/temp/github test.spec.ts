import { test } from '@playwright/test';

test('github issue writter prototype', async ({ page }) => {

    await page.goto('https:/github.com')
    await page.click("text=sign in");
    await page

})
