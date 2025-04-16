import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
    
 await page.goto('https://mail.google.com/');
//  await page.locator('text=ورود').click();
 });