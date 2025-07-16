
export default class testingUser{

    private firstName:string;
    private lastName:string;
    private email:string;
    private password:string;
    private access_token: string;
    private userID: string;

    // we recieve the Arguments from the tests.
    constructor(firstName:string, lastName:string, email:string, password:string)
    {
        // then we set the recieved arguments to the local variables in the class => "private firstName:string" etc.
        this.firstName = firstName; 
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // we will need the Getters "get...(){}" to get the arguments to return them:
    getFirtName(){ return this.firstName}
    getLastName(){  return this.lastName}
    getEmail(){ return this.email}
    getPassword(){ return this.password}

    getaccess_token(){return this.access_token}
    setaccess_token(access_token:string){this.access_token = access_token}

    getuserID(){return this.userID}
    setuserID(userID:string){this.userID = userID}
}