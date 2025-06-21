import {test, expect} from '@playwright/test';
import { link } from 'fs';

// test.beforeEach(async ({page}) => {
// await page.goto('https://www.digikala.com/')
// });

const array = ['تبلت', 'گوشی', 'Xiaomi' ] as const;

test.describe('check values and consts', () => {
    
    test('add strings from array to search box', async ({page}) => {
        await page.goto('https://www.digikala.com/')
        const SearchBar = await page.getByText('جستجو');

        await SearchBar.click()
        await page.locator('input[name="search-input"]')
        .fill(array[0]);
        await SearchBar.press('Enter');

        await expect(page.getByRole('link').filter({ hasText: array[0] }).first()).toContainText(array[0])
    });

        test('expect and not to expect', async ({page}) => {
        await page.goto('https://www.digikala.com/')
        await page.waitForURL('https://www.digikala.com/')
        const SearchBar = await page.getByText('جستجو');

        await SearchBar.click()
        await page.locator('input[name="search-input"]')
        .fill(array[0]);
        await SearchBar.press('Enter');
        await expect(page).toHaveURL('https://www.digikala.com/search/?q=تبلت')

        await page.waitForTimeout(3000)
        await page.locator('[class="lg:text-body-2 text-button-1 flex items-center h-full text-body-2 text-neutral-800"]').click()
        await page.locator('input[name="search-input"]').fill(array[1])
        await SearchBar.press('Enter');

        const FirstLink = await page.getByRole('link').filter({hasText:array[1]}).first();
        await expect(FirstLink).toContainText(array[1])
        await expect(FirstLink).not.toContainText(array[2]);

    }) ;

        test('clearing and expecting to be Empty', async ({page}) => {
        await page.goto('https://www.digikala.com/')
        await page.waitForURL('https://www.digikala.com/')
        const SearchBar = await page.getByText('جستجو');

        await SearchBar.click()
        await page.locator('input[name="search-input"]')
        .fill(array[0]);
        await SearchBar.press('Enter');
        await expect(page).toHaveURL('https://www.digikala.com/search/?q=تبلت')

        await page.waitForTimeout(2000)
        await page.locator('[class="lg:text-body-2 text-button-1 flex items-center h-full text-body-2 text-neutral-800"]')
        .click()
        page.locator('input[name="search-input"]').clear()
        // await page.locator('.grow > div > div > div > div > div > svg').first().click()
        // await page.locator('[class="flex cursor-pointer"]').first().click()

        await expect(page.locator('input[name="search-input"]')).toBeEmpty();
        await expect(page.locator('.grow > div > div > div > div > div > div > div > svg').first()).toBeHidden()
    });
});


