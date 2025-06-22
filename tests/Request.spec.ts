import { test, expect } from "@playwright/test";
import { request } from "http";

test('requesting an API', async ({page, request, context})=>{
    const resPonse = await request.post('https://accounts.mail.ir/app/sign-up', {
        data:{
            identifier: "zjlyd@telegmail.com", 
            username: "zjlyd", 
            first_name: "اساسا", 
            last_name: "اساسا",
            display_name: "اساسا",
            newPassword: "UXdlcjEyMzRA"
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
            url: 'https://accounts.mail.ir',
            name: 'access_Token',
            value: 'access_Token'
        },
        {
            url: 'https://accounts.mail.ir',
            name: 'first_name',
            value: 'first_name'
        },
        {
            url: 'https://accounts.mail.ir',
            name: 'userID',
            value: 'userID'
        },
    ]);
})




test('API call and Bearer Token usage', async ({page, request, context})=>{
    const resPonse = await request.post('https://accounts.mail.ir/app/sign-up', {
        data:{
            identifier: "zjlyd@telegmail.com", 
            username: "zjlyd", 
            first_name: "اساسا", 
            last_name: "اساسا",
            display_name: "اساسا",
            newPassword: "UXdlcjEyMzRA"
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
            url: 'https://accounts.mail.ir',
            name: 'access_Token',
            value: 'access_Token'
        },
        {
            url: 'https://accounts.mail.ir',
            name: 'first_name',
            value: 'first_name'
        },
        {
            url: 'https://accounts.mail.ir',
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