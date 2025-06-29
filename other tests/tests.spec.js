const {test, expect} = require('@playwright/test');

test('open URL', async ({page}) => {
    await page.goto('https://mail.ir');
    // await page.waitForEvent('https://accounts.mail.ir/#/oauth/login?client_id=accounts.mail.ir&redirect_uri=https:%2F%2Fwww.mail.ir%2Fnui%2F');
    await expect(page).toHaveURL('https://accounts.mail.ir/#/oauth/login?client_id=accounts.mail.ir&redirect_uri=https:%2F%2Fwww.mail.ir%2Fnui%2F');
    await browser.close;
    
});


test('add strings from array to search box', async ({page}) => {
    await page.goto('https://basalam.com/')
    const SearchBar = await page.getByPlaceholder({name:"جست‌وجو در بازار"});
    await expect(SearchBar).toBeVisible();
});

