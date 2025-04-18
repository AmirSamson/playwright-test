import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the Locator of `GetByRole` which will get the Link role from a button named: "ويبستور فدشي'" 
 * and will click on it, using the Click function.
 * 
 * Also we use the "WaitForTimeOut" function. 
 * Last: We use the Screen shot of the whole page by using the "await page.screenshot()" function. 
 * We can also use this function in taking screenshots of different parts or button, and not the whole the page.
 */

test('should click on the button', async ({page}) => {
    const browser = chromium.launch({
        headless: false
    })
    await page.goto('/en/home/');

    await page.click('"Home"')
    await page.click('"Suppliers"')
    await page
    .getByRole('link', {name: 'ويبستور فدشي'})
    .click();
    
})