export default class TestUser{
    private firstName:string;
    private lastName:string;
    private email:string;
    private password:string;

    constructor(firsName:string, lastName:string,email:string, password:string){
        this.firstName=firsName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
    }

    getfirtName(){        return this.firstName;   }
    getlastName(){        return this.lastName;    }
    getemail(){           return this.email        }
    getpassword(){        return this.password     }
}