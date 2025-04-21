
import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be finishing the login. 
 * Using the Consts instead of repetitive .getByRole('button') and .getByRole('textbox')
 */

test('click on Continue button to setting password', async ({page}) => {

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
    await expect(page).toHaveURL("https://webstore.demo.fedshi.ice.global/checkout/cart")
    await page.waitForTimeout(3000)
    await page.screenshot({path: './screenshots/screenshot-1006-1.jpg'})
    
})

