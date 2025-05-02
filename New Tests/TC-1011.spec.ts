import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * Adding items and then filling the Price field and going forward. 
 */

test('to add products using 3 locators', async ({page}) => {

    // This is the consts: 
    const buttonLoc = page.getByRole('button');
    const textbox = page.getByRole('textbox');


    await page.goto('https://webstore.demo.fedshi.ice.global/auth/login');
    await page.waitForTimeout(1000)

    await textbox
       .first()
       .fill('+98')

    await page
        .getByPlaceholder('711 123 456')
        .fill('9145678901')

    await buttonLoc.filter({hasText: 'استمر'}).click()
    await page.waitForLoadState();
    await page.waitForTimeout(1000)
    await textbox.fill('12345678');
    await buttonLoc.filter({ hasText: 'تسجيل الدخول' }).click();
    await page.waitForURL("https://webstore.demo.fedshi.ice.global/checkout/cart")
    await page.waitForTimeout(2000)
    
        // we have clicked on the 3rd button of the product card, and removed from list. 
    await page.getByRole('article').filter({ hasText: 'Test 4client only: 2' })
    .getByRole('button').nth(2).click();
    
    await page.screenshot({path: './screenshots/screenshot-1010-1.jpg'})
    await page.waitForTimeout(2000)
})


