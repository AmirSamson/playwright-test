import test, { expect } from "@playwright/test";
import User from "../Models/user";
import SignUpPage from "../Pages/SignUpPage";
import TodoAPI from "../APIs/Todos";
import UserAPI from "../APIs/UserAPI";

// test.use({
//     baseURL: 'http://todo.qacart.com/'
// })

test('Register the user - removing API and adding the Models instead.', async({page, request, context})=> {

    const user = new User(
        'hey2', 
        'hey3', 
        "521@gmail.com",
        '1234qwer@A',
    );

    const signUpPage = new SignUpPage();
    await signUpPage.signupUsingAPI(request, user, context); 
    await page.goto('http://todo.qacart.com/todo');
    await new TodoAPI().addTodoAPI(request, user);

});




test('Adding a Todo item - using models.', async ({page, request, context})=>{

    const user = new User(
        'hey2', 
        'hey3', 
        '520@gmail.com',
        '1234qwer@A',
    );

    const loginResponse = await new UserAPI().Login(request, user)

    const responseBodys = await loginResponse.json();
    const access_token = responseBodys.access_token;
    const firstName = responseBodys.firstName;
    const userID = responseBodys.userID;

    await context.addCookies([
        {   name: 'access_token', 
            value: access_token, 
            url: 'http://todo.qacart.com/'
        },
        {   name:'firstName', 
            value:firstName, 
            url: 'http://todo.qacart.com/' 
        },
        {   name:'userID', 
            value:userID, 
            url: 'http://todo.qacart.com/' 
        }
    ]);

    user.setaccess_token(access_token);
    user.setuserID(userID);

    await page.goto('http://todo.qacart.com/todo')
    await new TodoAPI().addTodoAPI(request,user);
    console.log(access_token, userID)
    await page.click('[data-testid=delete]');
    const noTodoMessages = page.locator('[data-testid=todo-item]')
    await expect(noTodoMessages).toBeVisible();
})
