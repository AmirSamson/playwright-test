import test from '@playwright/test'

test.use({
    baseURL: 'http://todo.qacart.com/'
});

test('API sign in', async({page, request, context})=> {
    const Response = await request.post('/api/v1/users/register', {
        data:{
            email: "233@gmail.com",
            firstName: 'hey2',
            lastName: 'hey2',
            password:"1234qwer@A"
        },
    });

    //we do this to extract the data(the access_Token, firstname and etc.) to store it in the variables of ResposeBody and etc. 
    // and by creating the Response.json(); we will store them in a JSON fro further usage:

    const ResponseBody = await Response.json();
    const access_token = ResponseBody.access_token; //each of these will be a cookie inside the "context.addcookies([])"
    const firstName = ResponseBody.firstName;
    const userID = ResponseBody.userID;

    await context.addCookies([
        {
            name: 'access_token',
            value: access_token,
            url: 'https://todo.qacart.com/'
        },
        {  
            name: 'firstName',
            value: firstName,
            url: 'https://todo.qacart.com/'
        },
        {  
            name: 'userID',
            value: userID,
            url: 'https://todo.qacart.com/'
        },
    ]);
    console.log(access_token, firstName, userID)

    //now that we have successfully done the API calls and 
    await page.goto('todo/new')
    
});

test('create a todo item with Login', async({page, request, context})=>{
    const Response = await request.post('http://todo.qacart.com/api/v1/users/login', {
        data:{email: "253@gmail.com", password: "1234qwer@A"}
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
    
    
    await page.goto('http://todo.qacart.com/todo')
    await request.post('/api/v1/tasks', {
        data:{
            isCompleted: false,
            item: "AMIR check!"
        }
    })
});
