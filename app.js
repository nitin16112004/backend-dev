
const {writefile}= require('./function2');


let res = writefile(new Date(), "Error", "this is an error");
console.log(res);