const fs=require('fs');
// fs.renameSync()  //synchronous api
// // renamesync takes two parameters as a old path and newpath
// fs.rename() //asynchronous api


console.log("before rename");
// we haveto use the existssync function and try catch function for 
// error handling of file nmae;
// if(fs.existsSync("name.txt"))
// {
//     fs.renameSync("name.txt","tt.txt");
//     console.log("succesful ")
// }
// else 
// {
//     console.log("file not found");
// }
try{
    fs.renameSync("tt.txt","ttt.txt");
    console.log("renamed")
}

catch(error){
    console.log("somthing error",error);
}

console.log("after rename")


