import { APIRequestContext } from "@playwright/test";
import testingUser from "../Models/userTest";

export default class ToDoAPI{

    async AddTodo(request: APIRequestContext, NewUser:testingUser){
        return await request.post('http://todo.qacart.com/api/v1/tasks', {
        data:{
            isCompleted: false,
            item: "New test - item 2"
        },
        headers: {
            Authorization: `Bearer: ${NewUser.getaccess_token()}`
        } 
    })
    }
}