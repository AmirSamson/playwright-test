export default class users {
    private name: string
    private lastName: string
    private mail: string
    private pass: string


    /** we can also delete the arguments in the "constructor(){}", as an empty constructor, and only the this.name = .... instead
    this way we can clean the code like this: 
    constructor()
        {
            this.name = name
            this.lastName = lastName
            this.mail = mail
            this.pass = pass
    }

    and in the file which we used the Constructor(), we can use it like this for the user data: 

    const user = new User();

    */
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