import { test, expect } from "@playwright/test";
import User from "../Models/user";

/**
now we can use the POM (page object models). by simply defining a new constant
*/

test('API call and Bearer Token usage', async ({page, request, context})=>{

    const user = new User(
        'zjlyd@telegmail.com',
        'amir',
        'amiri',
        '123454'
    );

    // now the model is used in the API as well. as easy as it looks. 
    // only using the "user.getemail" or "user.username" and etc.
    const resPonse = await request.post('https://todo.qacart.com/sign-up', {
        data:{
            identifier: user.getemail, 
            username: "zjlyd", 
            first_name: user.getfirstname, 
            last_name: user.getlastname,
            display_name: "اساسا",
            newPassword: user.getpassword
        },
    });
    const responseBody = await resPonse.json();
    const access_Token = responseBody.access_Token;
    const first_name = responseBody.first_name;
    const userID = responseBody.userID

    console.log(access_Token, first_name, userID);

    // this is an array of cookies. 
    // every cookie has different properties.

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

    // what we are doing here is sending a post request with the AUTH token inside. 
    // by having the token from the previous API call and storing it in the responseBody (responseBody.access_Token)

    await request.post('https://todo.qacart.com', {
        data:{
            isCompleted: false,
            item: 'This is a TEST',
        },
        headers: {
            Authorization: `Bearer ${access_Token}`,
        },
    })
})