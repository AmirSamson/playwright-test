import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

export default class TodoAPI{

    async addTodoAPI(request: APIRequestContext, user: User) {
    const response = await request.post('http://todo.qacart.com/api/v1/tasks', {
        data: {
            isCompleted: false,
            item: "Test for Amir",
        },
        headers: {
            Authorization: `Bearer ${user.getaccess_token()}`,
        },
    });
        console.log('Add Todo status:', response.status());
        const respBody = await response.json();
        console.log('Add Todo response body:', respBody);
        return response;
    };

    async addAnotherTodo(request:APIRequestContext, user:User){
        const response = await request.post('http://todo.qacart.com/api/v1/tasks', {
            data:{
                isCompleted: false,
                item: "new todo / Samson"
            },
            headers:{
                Authorization: `Bearer ${user.getaccess_token()}`
            },
        });
        const respBody = await response.json();
        console.log('Add Todo response body:', respBody);
        return response;
    };
};