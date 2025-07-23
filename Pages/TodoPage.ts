import { Page } from "@playwright/test";

export default class TodoPage{

    private get WelcomeMessage(){
        return `[data-testid=welcome]`
    }
    
    getWelcomeMessageElement(page:Page){
        return page.locator(this.WelcomeMessage)
    }
}