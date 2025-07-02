import test from "@playwright/test";
import TestUser from "../Models/users(test)";

test.use({
    baseURL: 'http://todo.qacart.com/'
})

test('removing API and adding the Models instead.', async({page, request, context})=> {

    const testerUser = new TestUser(
        "516@gmail.com", 
        'hey2', 
        'hey2', 
        '1234qwer@A'
    )

    const Response = await request.post('/api/v1/users/register', {
        data:{
            email: testerUser.getemail(),
            firstName: testerUser.getfirtName(),
            lastName: testerUser.getlastName(),
            password: testerUser.getpassword(),
        },
    });

    const ResponseBody = await Response.json();
    const access_token = ResponseBody.access_token; 
    const firstName = ResponseBody.firstName;
    const userID = ResponseBody.userID;


    // way.. 
    
    await context.addCookies([
        {name: 'access_token', value:access_token, url: 'https://todo.qacart.com/'},
        {name:'firstName', value:firstName, url: 'https://todo.qacart.com/' },
        {name:'userID', value:userID, url: 'https://todo.qacart.com/' }
    ]);

    await context.addCookies([
        {
            name: 'access_token',
            value: access_token,
            url: 'http://todo.qacart.com/'
        },
        {  
            name: 'firstName',
            value: firstName,
            url: 'http://todo.qacart.com/'
        },
        {  
            name: 'userID',
            value: userID,
            url: 'http://todo.qacart.com/'
        },
    ]);


    // console.log(access_token, firstName, userID)    
});
