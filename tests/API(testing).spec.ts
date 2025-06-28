import test from '@playwright/test'

test('API sign in', async({page, request, context})=> {
    const Response = await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            email: "257@gmail.com",
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
    console.log(access_token, firstName, userID)

    //now that we have successfully done the API calls and 
    await page.goto('https://todo.qacart.com//todo')
    
});

test('create a todo item', async({page, request, context})=>{
    const Response = await request.post('/api/v1/users/register', {
        data:{
            email: "253@gmail.com",
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
            url: ''
        },
        {  
            name: "firstName",
            value: firstName,
            url: ''
        },
        {  
            name: "userID",
            value: userID,
            url: ''
        },
    ]);
    
    
    await page.goto('/')
    await request.post('/api/v1/tasks',{
        data:{
            isCompleted: false,
            item: "AMIR check!"
        }
    })
});
