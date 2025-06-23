export default class users {
    private name: string
    private lastName: string
    private mail: string
    private pass: string

    constructor(
        name:string, 
        lastName:string, 
        mail:string, 
        pass:string)
        
        {
            this.name = name
            this.lastName = lastName
            this.mail = mail
            this.pass = pass
    }

    getname(){return this.name}
    getlasName(){return this.lastName}
    getmail(){return this.mail}
    getpass(){return this.pass}
}