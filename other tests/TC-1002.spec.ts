import {expect, test, chromium } from "@playwright/test";

/**
 * Descriptiom:
 * In this file we will be testing the Locator of `GetByRole` which will get the Link role from a button named: "ويبستور فدشي'" 
 * and will click on it, using the Click function.
 * 
 * Also we use the "WaitForTimeOut" function. 
 * Last: We use the Screen shot of the whole page by using the "await page.screenshot()" function. 
 * We can also use this function in taking screenshots of different parts or button, and not the whole the page.
 */

test.use({
    baseURL: "https://fedshi.com"
})

test('Take screen shot using .locator()', async ({page}) => {
    const browser = chromium.launch({
        headless: false
    })
    await page.goto('/en/home/');

    //These two expect the same thing: 
    await expect(page.url()).toBe("https://www.fedshi.com/en/home/")
    await expect(page).toHaveURL("https://www.fedshi.com/en/home/")


    await page.click('"Home"')
    await page.click('"Suppliers"')
    await page
    .getByRole('link', {name: 'ويبستور فدشي'})
    // .locator('a[href=https://web.fedshi.com/auth/login', {hasText: 'ويبستور فدشي'})
    .click();
    await page.waitForTimeout(2000)
    await page
        .screenshot({ path: './tests/screenshots/screenshot-1002-1.png' });
    
    //   We are using .locator() to take screen shots from a single element:
    await page
    .locator('text=تسجيل الدخول')
    // .waitFor({state:'visible'})
    .screenshot({path:'./tests/screenshots/screenshot-1002-2.png'})


    //Or if you or the Devs can insert "TestIds" in the code, add the following line and then find it using the `.locator`
    //this way you are secured, in case the text is changed but the text-box/login-title is still there: 
    //
    //       <h2> data-testid="login-title">تسجيل الدخول   </h2>
    //
    // Now you can use the following in the `.locator`: 
    //
    //       await page.locator('[data-testid="login-title"]').screenshot({path: ''})

})