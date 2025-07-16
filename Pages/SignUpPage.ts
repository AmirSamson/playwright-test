import { Page } from "@playwright/test";

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
            await page.type(this.emailInput, '524@gmail.com');
            await page.type(this.passwordInput, '1234qwer@A');
            await page.type(this.passwordConfrim, '1234qwer@A');
            await page.click(this.SubmitButton);
    }
}