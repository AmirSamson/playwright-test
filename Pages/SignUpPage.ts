import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../Models/user";
import UserAPI from "../APIs/UserAPI";

export default class SignUpPage{

// we have created this page, to be   Stateless   and not to move alot between page.
// we need to add the models of signUpPage and copy the code here to add a method in this Class:

    async LoadthePage(page: Page){
        await page.goto('http://todo.qacart.com/signup');
    }

    // we can define the locators as Attributes to this model:
    private get firstnameInput(){
        return `[data-testid=first-name]`
    }
    private get lastnameInput(){
        return `[data-testid=last-name]`
    }
    private get emailInput(){
        return `[data-testid=email]`
    }
    private get passwordInput(){
        return `[data-testid=password]`
    }
    private get passwordConfrim(){
        return`[data-testid=confirm-password]`
    }
    private get SubmitButton(){
        return`[data-testid=submit]`
    }


    async Signup(page:Page){
            await page.type(this.firstnameInput, 'hey2');
            await page.type(this.lastnameInput, 'hey2');
            await page.type(this.emailInput, '533@gmail.com');
            await page.type(this.passwordInput, '1234qwer@A');
            await page.type(this.passwordConfrim, '1234qwer@A');
            await page.click(this.SubmitButton);
    }



    async signupUsingAPI(request: APIRequestContext, user:User, context: BrowserContext) {
        
        const response = await new UserAPI().signup(request, user);

        const responseBody = await response.json();
        const access_token = responseBody.access_token;
        const firstName = responseBody.firstName;
        const userID = responseBody.userID


    await context.addCookies([
        {
            name: 'access_token',
            value: access_token,
            url: 'http://todo.qacart.com'
        },
        {
            name: 'firstName',
            value: firstName,
            url: 'http://todo.qacart.com'
        },
        {
            name: 'userID',
            value: userID,
            url: 'http://todo.qacart.com'
        },
    ]);
    };
}