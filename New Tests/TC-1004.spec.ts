import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the fill function. 
 * how to use it and how to fill the fileds/boxes where user is allowed to add input. 
 */

test('should click on the button', async ({page}) => {

    await page.goto('https://web.fedshi.com/auth/login');

// We can use the .getBy...() functions to fill-in the text boxes

       await page
       .getByRole('textbox', {name: '+964'})
       .first()
       .fill('+98')
       // await page.getByRole('textbox').first().fill('+98');
})