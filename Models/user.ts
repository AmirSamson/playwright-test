export default class User {
    private UserName: string;
    private display_name: string;
    private lastname: string;
    private firstname: string;
    private email: string;
    private password: string;

    // for these two, we don't want to have them constructed in the Constructor(), so we won't add them. and instead we creat a getter and a Setter:
    private access_Token: string;
    private userID: string;


    //now we need a constructor
    // we need to get an argument from this contructor and set it to thos variables we defined above (in class): 
    // the "this.email = ..." will do that for us.

    constructor(
        UserName: string,
        display_name: string,
        firstname: string, 
        lastname: string, 
        password: string, 
        email: string)
        {
        this.UserName = UserName
        this.display_name = display_name
        this.email = email
        this.firstname = firstname
        this.lastname = lastname
        this.password = password
    }

    // now we can define this User in the tests and import it there,  and call the arguements in the Constructor (respectfully) in there. like this:
    // const user = new User('example_firstname', 'example_lastname', 'password', 'test@email.com')
    //but theese are Private. we need to get them using the following method:

    getUserName(){return this.UserName}
    getdisplay_name(){return this.display_name}
    getfirstname(){
        return this.firstname
    }
    getlastname(){
        return this.lastname
    }
    getemail(){
        return this.email
    }
    getpassword(){
        return this.password
    }

    //we add the getter and setter for the "access_Token" and "userID":
    getaccess_Token(){
        return this.access_Token
    }
    setaccess_Token(access_Token: string){
        this.access_Token = access_Token
    }

    getuserID(){
        return this.userID
    }
    setuserID(userID: string){
        this.userID=this.userID
    }
}
