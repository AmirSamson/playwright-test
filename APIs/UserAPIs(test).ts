import { APIRequestContext } from "@playwright/test";
import testingUser from "../Models/userTest";

export default class UserAPIsTest{

    async register(request: APIRequestContext, NewUser: testingUser){
        return await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: NewUser.getFirtName(),
            lastName: NewUser.getLastName(),
            email: NewUser.getEmail(),
            password:NewUser.getPassword(),
        },
    });
    }
}