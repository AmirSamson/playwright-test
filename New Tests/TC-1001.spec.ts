import {expect, test, chromium } from "@playwright/test";


/**
 * Description
 * This is a test case for navigating to a webpage using the `Base URL` in the test file. 
 * Using the "Test.use" which means that in this file, the test will use this Base URL only. 
 * This is called local BaseURL and it is not General or Generic.
 * (also in the Playwright.config.ts the same BaseURL is set)
 * 
 * Apart from that, we are going to click on different Tabs.  -> Home, and Suppliers 
 */

test.use({
    baseURL: "https://fedshi.com"
})

test('navigate and expect URL: click on button', async ({page}) => {
    const browser = chromium.launch({
        headless: false
    })
    await page.goto('/en/home/');
    await expect(page.url()).toBe("https://www.fedshi.com/en/home/")
    await expect(page).toHaveURL("https://www.fedshi.com/en/home/")

    await page.click('"Home"')
    await page.click('"Suppliers"')
})