import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../Models/user";
import UserAPI from "../APIs/UserAPI";

export default class SignUpPage{

// we have created this page, to be   Stateless   and not to move alot between page.
// we need to add the models of signUpPage and copy the code here to add a method in this Class:

    async LoadthePage(page: Page){
            await page.goto('http://todo.qacart.com/signup');
    }
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
            await page.type(this.emailInput, '525@gmail.com');
            await page.type(this.passwordInput, '1234qwer@A');
            await page.type(this.passwordConfrim, '1234qwer@A');
            await page.click(this.SubmitButton);
    }


    async signupAPI(request: APIRequestContext, user:User, context: BrowserContext){
        
    const response = await new UserAPI().signup(request, user);

    const responseBody = await response.json();
    const access_Token = responseBody.access_Token;
    const first_name = responseBody.first_name;
    const userID = responseBody.userID


    // user.setaccess_Token(access_Token);
    // user.setuserID(userID);


    
    console.log(access_Token, first_name, userID);

    await context.addCookies([
        {
            url: 'https://todo.qacart.com',
            name: 'access_Token',
            value: 'access_Token'
        },
        {
            url: 'https://todo.qacart.com',
            name: 'first_name',
            value: 'first_name'
        },
        {
            url: 'https://todo.qacart.com',
            name: 'userID',
            value: 'userID'
        },
    ]);

    }
}