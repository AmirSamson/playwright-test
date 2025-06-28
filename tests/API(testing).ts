import test from '@playwright/test'
import { stringify } from 'querystring';


test('API sign in', async({page, request, context})=> {
    const Response = await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            email: "252@gmail.com",
            firstName: 'hey',
            lastName: 'hey1',
            password:"1234qwer@A"
        },
    });

    const ResponseBody = await Response.json();
    const access_token = ResponseBody.access_token; //each of these will be a cookie inside the "context.addcookies([])"
    const firstName = ResponseBody.firstName;
    const userID = ResponseBody.userID;

    await context.addCookies([
        {
            name: "access_token",
            value: access_token,
            url: 'https://todo.qacart.com/'
        },
        {  
            name: "firstName",
            value: firstName,
            url: 'https://todo.qacart.com/'
        },
        {  
            name: "userID",
            value: userID,
            url: 'https://todo.qacart.com/'
        },
    ]);
    console.log(access_token, firstName, userID)

    //now that we have successfully done the API calls and 
    await page.goto('https://todo.qacart.com/todo')
    
})
