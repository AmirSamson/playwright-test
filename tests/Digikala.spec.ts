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
    }) 
});


