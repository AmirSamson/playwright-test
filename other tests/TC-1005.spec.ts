import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be finishing the login. 
 * clicking on the Next/continue button to fill the password.
 */

test('click on Continue button to setting password', async ({page}) => {

    await page.goto('https://webstore.demo.fedshi.ice.global/auth/login');

    await page
       .getByRole('textbox')
       .first()
       .fill('+98')

    await page
        .getByPlaceholder('711 123 456')
        .fill('9145678901')

    await page.getByRole('button', {name: 'استمر'}).click()
    await page.waitForTimeout(1000)

    // await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('textbox').fill('12345678');
    await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
    await page.waitForURL("https://webstore.demo.fedshi.ice.global/checkout/cart")
    await expect(page).toHaveURL("https://webstore.demo.fedshi.ice.global/checkout/cart")
    await page.waitForTimeout(3000)
    await page.screenshot({path: './screenshots/screenshot-1005-1.jpg'})
    
})


