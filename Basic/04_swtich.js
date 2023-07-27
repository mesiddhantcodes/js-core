// create an application with following  roles:
// admin-get full access
// subadmin-get access to create delete course
// testprep-get access to create test
// user-get access to consume course
var user="testprep";
switch(user)
{
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("not full acess");
    default:
        console.log("temporary user")
        break;
}