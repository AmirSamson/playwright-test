import {expect, test } from "@playwright/test";

/**
 * Descriptiom:
 * finding and Filling all of the price fields. Despite the number of products. we will do some programing here :D
 */

test('locate all articles and fill in the new price based on Minimum price', async ({page}) => {

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
    // For that, we need to first locate each product card which is the desired product card of ours.
    // after that we need to get the minimum price and do the addition or multipication on it as we desire.
    // 

    const productCards = await page.getByRole('article').all();

    for (const card of productCards) {
      const priceHints = card.locator('text=أعلى من');
      const count = await priceHints.count();
  
      if (count === 0) {
        console.log('No minimum price found in this card, skipping...');
        continue;
      }
  
      const minPriceText = await priceHints.first().textContent();
      if (!minPriceText) {
        console.log('Price hint text was empty, skipping...');
        continue;
      }
  
      const match = minPriceText.match(/([\d,]+)\s*د\.ع\./);
      if (!match) {
        console.log(`Price not found in: ${minPriceText}`);
        continue;
      }
  
      const numberStr = match[1].replace(/,/g, '');
      const minPrice = parseInt(numberStr, 10);
      const newPrice = Math.ceil(minPrice * 1.2);

      // the issue was with this locator : 

  
      const priceInput = card.locator('[data-sentry-element="MuiTextField"][data-sentry-component="NumberTextField"] input');
      await priceInput.fill('');
      await priceInput.type(newPrice.toString());
  
      console.log(`Updated price: ${minPrice} → ${newPrice}`);
    }

    // Adding the click on the Continue button (استمر): 
    await page.getByRole('[data-sentry-component="Button"]').click()

    await page.waitForTimeout(2000)


})