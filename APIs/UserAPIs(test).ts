import { APIRequestContext } from "@playwright/test";
import testingUser from "../Models/userTest";

export default class UserAPIsTest{

    async register(request: APIRequestContext, NewUser: testingUser){
        return await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: NewUser.getfirstName(),
            lastName: NewUser.getlastName(),
            email: NewUser.getemail(),
            password:NewUser.getpassword(),
        },
    });
    };

    async Login(request: APIRequestContext, NewUser: testingUser){
        return await request.post('http://todo.qacart.com/api/v1/users/login', {
            data:{
                email: NewUser.getemail(),
                password: NewUser.getpassword(),
            }
        });
    };
};