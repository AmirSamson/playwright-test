import { expect, test } from "@playwright/test" ;


test.describe("learn how to handle input fields", () => {
    // let browser: Browser;
    // let context: BrowserContext;
    // let page: Page; 
    //     beforeAll(async () => {
    //     let browser = await chromium.launch({
    //         headless: false
    //     });
    //     let context = await browser.newContext();
    //     let page = await context.newPage();
    //     await page.goto("https://srm.semnan.ac.ir/");
    // });

    test("login", async ({page}) => {

        await page.locator('text=ورود').click();
        await page.waitForNavigation()
        const name = await page.$("#std_no")
        await name?.type("9812722005")
    });
    // test("")
    // afterAll(async() => {
    //     await page.close();
    //     await context.close();
    //     await browser.close();
        
    // });

});