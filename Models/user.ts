export default class User {
    private firstName:string;
    private lastName:string;
    private email:string;
    private password:string;
    // for these two, we don't want to have them constructed in the Constructor(), so we won't add them. and instead we creat a getter and a Setter:
    private access_token: string;
    private userID: string;

    //now we need a constructor
    // we need to get an argument from this contructor and set it to thos variables we defined above (in class): 
    // the "this.email = ..." will do that for us.

    constructor(
        firstName:string, 
        lastName:string, 
        email:string, 
        password:string)
        {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // now we can define this User in the tests and import it there,  and call the arguements in the Constructor (respectfully) in there. like this:
    // const user = new User('example_firstname', 'example_lastname', 'password', 'test@email.com')
    //but theese are Private. we need to get them using the following method:


    getFirstName(){ return this.firstName}
    getLastName(){  return this.lastName}
    getEmail(){ return this.email}
    getPassword(){ return this.password}

    //we add the getter and setter for the "access_Token" and "userID":
    getaccess_token(){
        return this.access_token;
    }
    setaccess_token(access_token: string){
        this.access_token = access_token;
    }

    getuserID(){
        return this.userID;
    }
    setuserID(userID: string){
        this.userID=userID;
    }
}
