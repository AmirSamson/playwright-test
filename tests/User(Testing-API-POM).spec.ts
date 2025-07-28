import { expect, test } from "@playwright/test";
import User from "../Models/user"
import SignUpPage from "../Pages/SignUpPage";
import TodoPage from "../Pages/TodoPage";

/**
 * In this fill we will use the API call on the "UserAPI.ts" file on APIs folder, and we will remove the codes from here. 
 * the codes were the followin which I removed: 
 * 
 *     const resPonse = await request.post('https://todo.qacart.com/sign-up', {
        data:{
            username: user.getUserName, 
            display_name: user.getdisplay_name,
            identifier: user.getemail, 
            first_name: user.getfirstname, 
            last_name: user.getlastname,
            newPassword: user.getpassword
        },
    });

    these were removed and instead I added the following line of code.
            const resPonse = new UserAPI().signup(request, user);

 */

test('API call and Bearer Token usage for Register', async ({page, request, context})=>{

    const user = new User(
        'zjlyd',
        'AAAAm',
        'zjlyd33@gmail.com',
        '1234qwer@A',
    );

    const singUpPage = new SignUpPage();
    await singUpPage.signupUsingAPI(request, user, context); 
    await page.goto('http://todo.qacart.com/todo');


});



//should add the register api for the SignUp.ts page in "Pages" folder
test('Should be able to register', async({page})=>{

    const signUpPage = new SignUpPage()
    await signUpPage.LoadthePage(page);
    await signUpPage.Signup(page)

    const Todopage = new TodoPage()
    const welcomeMessage = Todopage.getWelcomeMessageElement(page);

    await expect(welcomeMessage).toBeVisible();

});