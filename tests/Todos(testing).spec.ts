import test from '@playwright/test'

test.use({
    baseURL: 'http://todo.qacart.com/'
});

test('API sign in', async({page, request, context})=> {

    const Response = await request.post('/api/v1/users/register', {
        data:{
            firstName: 'hey2',
            lastName: 'hey2',
            email: "327@gmail.com",
            password:"1234qwer@A",
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
    
});

test('create a todo item with Login', async({page, request, context})=>{
    const Response = await request.post('http://todo.qacart.com/api/v1/users/login', {
        data:{
            email: "253@gmail.com", 
            password: "1234qwer@A"
        }
    });

    const ResponseBody = await Response.json();
    const access_token = ResponseBody.access_token;
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
    
    //for this part we need to add the headers in the API call so that we can authorize ourselves and make a POST request.
    await request.post('/api/v1/tasks', {
        data:{
            isCompleted: false,
            item: "AMIR check!"
        },

        // we are using the access token from the previous API call in the test for Login:
        headers:{
            Authorization: `Bearer ${access_token}`
        }
    })
});

