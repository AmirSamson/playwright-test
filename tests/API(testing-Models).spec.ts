import test from "@playwright/test";
import testingUser from "../Models/userTest";
import UserAPIsTest from "../APIs/UserAPIs(test)";
import userTest from "../Models/userTest";


// test.use({
//     baseURL: 'http://todo.qacart.com/'
// })

test('removing API and adding the Models instead.', async({request, context})=> {

    const NewUser = new testingUser(
        'hey2', 
        'hey3', 
        "519@gmail.com",
        '1234qwer@A',
    );

    const responses = await request.post('http://todo.qacart.com/api/v1/users/register', {
        data:{
            firstName: NewUser.getFirtName(),
            lastName: NewUser.getLastName(),
            email: NewUser.getEmail(),
            password:NewUser.getPassword(),
        },
    });
    

    const ResponseBody = await responses.json();
    const access_token = ResponseBody.access_token; 
    const firstName = ResponseBody.firstName;
    const userID = ResponseBody.userID;

    
    await context.addCookies([
        {   name: 'access_token', 
            value:access_token, 
            url: 'https://todo.qacart.com/'
        },
        {   name:'firstName', 
            value:firstName, 
            url: 'https://todo.qacart.com/' 
        },
        {   name:'userID', 
            value:userID, 
            url: 'https://todo.qacart.com/' 
        }
    ]);

    console.log(access_token, firstName, userID)    
});
