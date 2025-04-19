import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the fill function. 
 * how to use it and how to fill the fileds/boxes where user is allowed to add input. 
 */

test('using .fill() function using .getBy...()', async ({page}) => {

    await page.goto('https://web.fedshi.com/auth/login');

// We can use the .getBy...() functions to fill-in the text boxes. For login fields which user has to input 

    await page
       .getByRole('textbox')
       .first()
       .fill('+98')

    await page.getByPlaceholder('input[placeholder=711123456]').fill('9145678901')
    await page.close
})