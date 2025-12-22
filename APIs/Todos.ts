import { APIRequestContext, Page } from "@playwright/test";
import User from "../Models/user";
import { count } from "console";
import path from "path";

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

    async addMutlipleTodos(count: number, request:APIRequestContext, page:Page, user:User){
    
        const todoAPI = new TodoAPI();
        for(let i=0; i< count; i++){
            await todoAPI.addTodoAPI(request, user);
        };
        await page.reload();
    }

    async deleteMultipleTodos(page:Page){
        
        const deletebutton = await page.getByTestId('delete')
            while( await deletebutton.count() > 0 ) {
                await deletebutton.first().click();
        }
    }
};