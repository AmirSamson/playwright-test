import { test } from "@playwright/test";
import User from "../Models/user"
import UserAPI from "../APIs/UserAPI";

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

test('API call and Bearer Token usage', async ({page, request, context})=>{

    const user = new User(
        'zjlyd',
        'اساسا',
        'zjlyd12@telegmail.com',
        'amir1234@A',
    );

    // if we don't add the "await" right before "new UserAPI()" the " await resPonse.json()" will raise an error because it is async. 
    //so we add an "await" right before "new UserAPI()" to avoid it:

    const response = await new UserAPI().signup(request, user);

    const responseBody = await response.json();
    const access_Token = responseBody.access_Token;
    const first_name = responseBody.first_name;
    const userID = responseBody.userID


    user.setaccess_Token(access_Token);
    user.setuserID(userID);


    
    console.log(access_Token, first_name, userID);

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


    //  this is the Model for Login - useing the "user.ts"     ---->            await new UserAPI().Login(request, user)

});




test('Should be able to register', async({page, request})=>{

    const user = new User(
        'zjlyd',
        'اساسا',
        'zjlyd12@telegmail.com',
        'amir1234@A',
    );

    await new UserAPI().Login(request, user)
    
    await page.goto('')

});