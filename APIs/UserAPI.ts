import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

/**
 * The idea is to write models for APIs as well to reduce the codes in each test case. 
 * We well add the methods for the requests.
 */


export default class UserAPI{

    //each method name is based on what we do with that API. for example, in the sign up API, we use the method name of "SignUp":

    async signup(request: APIRequestContext, user:User){

        // now we copy the API request from .\tests\Requests.spec.ts file and add it here with changing a little bit:

        const responses = await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: User.getFirtName(),
            lastName: User.getLastName(),
            email: User.getEmail(),
            password: User.getPassword(),
        },
    });
    }
}