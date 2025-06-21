import {test, expect} from '@playwright/test'
const array = ['تبلت', 'گوشی', 'Xiaomi' ] as const;

test('expect visibilty on search box', async ({page}) => {
    await page.goto('https://www.digikala.com/')
    const SearchBar = await page.getByText("جستجو");
    await expect(SearchBar).toBeVisible();
});


test('checkboxing Radio button, expecting URL change', async ({page}) => {
        await page.goto('https://www.digikala.com/')
        await page.waitForURL('https://www.digikala.com/')
        const SearchBar = await page.getByText('جستجو');

        await SearchBar.click()
        await page.locator('input[name="search-input"]')
        .fill(array[0]);
        await SearchBar.press('Enter');
        await expect(page).toHaveURL('https://www.digikala.com/search/?q=تبلت')

        await page.waitForTimeout(1500)
        await page.locator('[class="block w-full relative h-full styles_switchInput__track__ftJN8 styles_switchInput__track--border--400__474Fy"]').nth(1).click();
        await expect(page).toHaveURL('https://www.digikala.com/search/?has_ship_by_seller=1&q=تبلت')
});