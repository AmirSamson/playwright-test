import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

/**
 * The idea is to write models for APIs as well to reduce the codes in each test case. 
 * We well add the methods for the requests.
 */
export default class UserAPI{

    async signup(request: APIRequestContext, user:User){

        return await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password:user.getPassword(),
        },
    });

    };

    async Login(request: APIRequestContext, user: User){
        return await request.post('https://todo.qacart.com/api/v1/users/login', {
            data:{
                email: user.getEmail(),
                password: user.getPassword(),
            }
        });
        };
};