import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the fill function. 
 * how to use it and how to fill the fileds/boxes where user is allowed to add input. 
 */

test('fill() function using .locator() function', async ({page}) => {

    await page.goto('https://web.fedshi.com/auth/login');

//First we will use the .locator() function to locate and fill in the text area. 
    await page.locator('input').first().fill('+98')
    await page.locator('input[placeholder="711 123 456"]').fill('9145678901')
    await page.locator('.mobile-input.flex.flex-row-reverse').screenshot({path: './tests/screenshots/screenshot-1003-1.jpg'})

})