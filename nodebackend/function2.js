const {createlog,updatelog}= require('./function');
const fs = require("fs");

function writefile(date, types, data) {
    try{
        fs.writeFileSync("logg.txt",`this is a log file ${date} and type is ${types} and data is ${data}`);
        return "file written successfully";


    }
    catch(err){     
        return err;
    }
}


module.exports={writefile};
