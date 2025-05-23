import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * Filling the price field and clicking on next button.
 */

test('getting Minimum Selling price and adding new price in the field', async ({page}) => {

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

    // Here we locate the price field on the Cart for each prodcut.
    // For that we need to first locate each product card which is the desired product card of ours.
    // after that we need to get the minimum price and do the addition or multipication on it as we desire.
    // 

    const allArticles = page.getByRole('article');
    const productCard = allArticles.filter({ hasText: 'Test 4client only: 2' });
 
    const minPriceText = await productCard.locator('text=أعلى من ').textContent();

    if (!minPriceText) throw new Error('Minimum price not found');

    const match = minPriceText.match(/([\d,]+)\s*د\.ع\./);
    if (!match) throw new Error('Price number not found in string');

    const numberStr = match[1].replace(/,/g, ''); 
    const minPrice = parseInt(numberStr, 10);

        // I added this 1.2 multiplier for multiplying the price by 1.2
        // and the "Math.ceil()" will round up decimal numbers, if any!
    const newPrice = Math.ceil(minPrice * 1.2);

    const priceInput = productCard.locator('[data-sentry-element="MuiTextField"][data-sentry-component="NumberTextField"] input');

    await priceInput.fill(''); /// and here we type the newPrice into the text filed of customer Price:
    await priceInput.type(newPrice.toString());

    
    await page.waitForTimeout(2000)


})