// let fs = require('fs');
// const dataSync=fs.writeFileSync('a.txt','Hiii');
// function writefile(date,types,data){
//     let res=fs.writeFileSync("log.txt",'this is a logger file ${date} and type is ${types} and data is ${data}');
//     return res;
// }
// let res=writefile(new Date(),"Error","this is an error");
// console.log(res);
 
let fs = require('fs');
const dataSync = fs.writeFileSync('a.txt', 'Hiii');
function writefile(date, types, data) {
    try {
        let res=fs.writeFileSync("logger.txt",'this is a log file ${date} and type ${types} and data is${data}');
        return "file written successfully";
    } catch (err) {
        return err;
    }
}
let res = writefile(new Date(), "Error", "this is an error");
console.log(res);
