import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

export default class ToDoAPI{

    async addTodoAPI(request: APIRequestContext, user: User){
        await request.post('http://todo.qacart.com/api/v1/tasks', {
        data:{
            isCompleted: false,
            item: 'This is a TEST',
        },
        headers: {
            Authorization: `Bearer ${user.getaccess_Token()}`,
        },
    })
    }
}