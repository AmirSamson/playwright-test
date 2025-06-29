import {test, expect} from '@playwright/test'

test.use({
    baseURL: "https://www.digikala.com"
})

const array = ['تبلت', 'گوشی', 'Xiaomi' ] as const;

test('expect visibilty on search box', async ({page}) => {
    await page.goto('')
    const SearchBar = await page.getByText("جستجو");
    await expect(SearchBar).toBeVisible();
});


test('checkboxing Radio button, expecting URL change', async ({page}) => {
        await page.goto('')
        await page.waitForURL('')
        const SearchBar = await page.getByText('جستجو');

        await SearchBar.click()
        await page.locator('input[name="search-input"]')
        .fill(array[0]);
        await SearchBar.press('Enter');
        await expect(page).toHaveURL('/search/?q=تبلت')

        await page.waitForTimeout(1500)
        await page.locator('[class="block w-full relative h-full styles_switchInput__track__ftJN8 styles_switchInput__track--border--400__474Fy"]').nth(1).click();
        await expect(page).toHaveURL('/search/?has_ship_by_seller=1&q=تبلت')
});

test('forLoop -> consistent', async ({page})=>{
    await page.goto('')
    await page.waitForURL('')
    const SearchBar = await page.getByText('جستجو');

    for (const Portion of array.slice(0, 2)) {
      await SearchBar.click();    
      await page.locator('input[name="search-input"]').fill(Portion);
      await SearchBar.press('Enter');
      await page.waitForTimeout(4000)
      await page.locator('[class="block w-full relative h-full styles_switchInput__track__ftJN8 styles_switchInput__track--border--400__474Fy"]').nth(1).click();

    }
})


test('Defining inside Functions', async ({page})=>{
    await page.goto('')
    await page.waitForURL('')
    await page.dblclick('[class="lg:text-body-2 text-button-1 flex items-center h-full text-body-2 text-neutral-500"]');
});