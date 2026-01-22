const fs=require('fs');
const path=require('path');

const logFilePath=path.join(__dirname,'logg.txt');

function createlog(date,type,data){
    try{
        fs.writeFileSync(logFilePath,`log entry: ${date}\n type:${type}\n date:${data}\n`);
        return "log file created successfully";
    }
    catch(err){
        return err;
    }

}

function updatelog(date,type,data){
    try{
        fs.appendFileSync(logFilePath, `log entry:${date}\n type:${type}\n data:${data}\n`);
        return "log file updated successfully";

    }
    catch(err){
        return err;
    }
}


let count=0;
let a=setInterval(() => {
    count++;
    if(count==5){
        clearInterval(a );
    }
    console.log(updatelog(new Date(),"error","this is an error log"));
},5000)





module.exports={createlog,updatelog};
