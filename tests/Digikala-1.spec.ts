import {test, expect} from '@playwright/test'

test('expect visibilty on search box', async ({page}) => {
    await page.goto('https://www.digikala.com/')
    const SearchBar = await page.getByText("جستجو");
    await expect(SearchBar).toBeVisible();
});