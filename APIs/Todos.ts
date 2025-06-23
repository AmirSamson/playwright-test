import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

export default class ToDo{

    async todo(request: APIRequestContext, user: User){
        await request.post('https://todo.qacart.com', {
        data:{
            isCompleted: false,
            item: 'This is a TEST',
        },
        headers: {
            Authorization: `Bearer ${user.getaccess_Token}`,
        },
    })
    }
}