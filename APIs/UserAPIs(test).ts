import { APIRequestContext } from "@playwright/test";
import testingUser from "../Models/userTest";

export default class UserAPIsTest{

    async register(request: APIRequestContext, userTest: testingUser){
        return await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: NewUser.getFirtName(),
            lastName: userTest.getLastName(),
            email: userTest.getEmail(),
            password:userTest.getPassword(),
        },
    });
    }
}