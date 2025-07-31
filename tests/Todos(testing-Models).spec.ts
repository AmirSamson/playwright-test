import test, { expect } from "@playwright/test";
import testingUser from "../Models/userTest";
import UserAPIsTest from "../APIs/UserAPIs(test)";
import ToDoAPI from "../APIs/TodoAPI(test)";
import User from "../Models/user";
import SignUpPage from "../Pages/SignUpPage";
import TodoAPI from "../APIs/Todos";

// test.use({
//     baseURL: 'http://todo.qacart.com/'
// })

test('Register the user - removing API and adding the Models instead.', async({page, request, context})=> {

    const user = new User(
        'hey2', 
        'hey3', 
        "538@gmail.com",
        '1234qwer@A',
    );

    const signUpPage = new SignUpPage();
    await signUpPage.signupUsingAPI(request, user, context); 
    await page.goto('http://todo.qacart.com/todo');
    await new TodoAPI().addTodoAPI(request, user);

});




test('Adding a Todo item - using models.', async ({page, request, context})=>{

    const NewUser = new testingUser(
        'hey2', 
        'hey3', 
        '520@gmail.com',
        '1234qwer@A',
    );

    const loginRes = await new UserAPIsTest().Login(request, NewUser);


    const responseBodys = await loginRes.json();
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

    await page.goto('https://todo.qacart.com/todo')
    await new ToDoAPI().AddTodo(request,NewUser)
    await page.click('[data-testid=delete]');
    const noTodoMessages = page.locator('[data-testid=todo-item]')
    await expect(noTodoMessages).toBeVisible();

})
