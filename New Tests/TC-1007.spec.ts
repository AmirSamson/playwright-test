
import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be trying to locate a button on page with multiple other buttons and add a product to cart.
 */

test('locate the add button on one specific product card and click on it', async ({page}) => {

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
    
    //from here:


    // we cam use both .locator() and .getByTestId() the following way: 
    
    // await page.locator('[data-testid="DeleteOutlineIcon"]').first().click();
    await page.getByTestId('DeleteOutlineIcon').first().click()

    await page.getByLabel('text=سلة التسوق').isVisible()
    await page.locator('[data-sentry-component="CartItemsEmptyState"]').screenshot({path: './screenshots/screenshot-1007-1.jpg'})
    const productCard = page.locator('article:has-text("Test 4")');
    await productCard.locator('button').first().click();
    await page.waitForTimeout(4000)
})

