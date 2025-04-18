import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the fill function. 
 * how to use it and how to fill the fileds/boxes where user is allowed to add input. 
 */

test('should click on the button', async ({page}) => {

    await page.goto('https://web.fedshi.com/auth/login');

    // await page
    // .getByRole('textbox', {name: '+964'})
    // .fill('+98')
    // await page.getByRole('textbox').first().fill('+98');
    await page.locator('input').first().fill('+98')
    await page.locator('input[placeholder="711 123 456"]').fill('9145678901')
    await page.locator('.mobile-input.flex.flex-row-reverse').screenshot({path: './tests/screenshots/screenshot-1003-1.jpg'})

})