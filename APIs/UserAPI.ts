/**
 * The idea is to write models for APIs as well to reduce the codes in each test case. 
 * We well add the methods for the requests.
 */

import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

export default class UserAPI{
    //each method name is based on what we do with that API. for example, in the sign up API, we use the method name of "SignUp":

    async signup(request: APIRequestContext, user: User){
        // now we copy the API request from .\tests\Requests.spec.ts file and add it here with changing a little bit:

        return await request.post('https://accounts.mail.ir/app/sign-up', {
        data:{
            username: user.getUserName, 
            display_name: user.getdisplay_name,
            identifier: user.getemail, 
            first_name: user.getfirstname, 
            last_name: user.getlastname,
            newPassword: user.getpassword
        },
    });
    }
}