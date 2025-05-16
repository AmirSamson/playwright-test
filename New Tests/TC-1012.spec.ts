import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * Testing to see if there are products in the cart, if yes, then delete them. 
 * Using the If(){} statement. 
 */

test('the if() statement to delete items in cart', async ({page}) => {

    // This is the consts: 
    const buttonLoc = page.getByRole('button');
    const textbox = page.getByRole('textbox');


    await page.goto('https://webstore.demo.fedshi.ice.global/auth/login');

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
    
    
    await page.getByRole('article').filter({ hasText: 'Test 4client only: 2' })
    .getByRole('button').nth(2).click();
    
    const rowLocator = page.getByRole('article');

    await rowLocator
    .filter({ hasText: 'Test 4client only: 2' })
    .filter({ has: page.getByRole('article', { name: 'Test 4' }) })
    .screenshot({ path: 'screenshot.png' });
})