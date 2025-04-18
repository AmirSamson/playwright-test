import {expect, test, chromium } from "@playwright/test";

test.use({
    baseURL: "https://fedshi.com"
})

test('should click on the button', async ({page}) => {
    const browser = chromium.launch({
        headless: false
    })
    await page.goto('/en/home/');
    await expect(page.url()).toBe("https://www.fedshi.com/en/home/")
    await expect(page).toHaveURL("https://www.fedshi.com/en/home/")

    await page.click('"Home"')
    await page.click('"Suppliers"')
    await page
    .getByRole('link', {name: 'ويبستور فدشي'})
    // .locator('a[href=https://web.fedshi.com/auth/login', {hasText: 'ويبستور فدشي'})
    .click();
    await page.waitForTimeout(2000)
    await page
        .screenshot({ path: './tests/tests-results/screenshots/screenshot-1.png' });
})