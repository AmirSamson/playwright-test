import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * Testing to see if we can fill the cart and then clear it. 
 * Also, trying to clear more than 2 delete buttons.
 */

test('if the if() statement can clear newly added items to cart', async ({page}) => {

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

    const removeButton = await page.locator('[data-testid="RemoveIcon"]')
    const itemCount = await deleteButtons.count();
    const removeIconCount = await removeButton.count();

    if (itemCount > 0) {
    console.log(`Found ${itemCount} items in cart. Clearing...`);

    for (let i = 0; i < itemCount; i++) {

        await page.locator('[data-testid="DeleteOutlineIcon"]').first().click();
        await page.waitForTimeout(300);

        if (await removeButton.isVisible()){

            for (let i = 0; i < removeIconCount; i++){
            await removeButton.first().click();}
        }
 
    }}
    else {
    console.log('Cart is already empty.');
    }

    await page.waitForSelector('[data-sentry-component="CartItemsEmptyState"]');
    await page.getByLabel('text=سلة التسوق').isVisible()
    await page.locator('[data-sentry-component="CartItemsEmptyState"]').screenshot({path: './screenshots/screenshot-1007-1.jpg'})
    const productCard = page.locator('article:has-text("Test 4")');
    await productCard.locator('button').first().click();
    await page.waitForTimeout(4000)
})
