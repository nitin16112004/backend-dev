const fs=require('fs');
const path=require('path');

const logFilePath=path.join(__dirname,'logge.txt');
// function readLog(){
//     fs.writeFile('logge.txt','hello nitin',(err)=>
//         {
//         if(err) throw err;
//         console.log('file created');
//     });
// }
// let res=readLog();
// console.log(res);

// function readLog(){
//     fs.rename('logge.txt','loge.txt',(err)=>
//         {
//         if(err) throw err;
//         console.log('file created');
//     });
// }
// let res=readLog();
// console.log(res);



function writeFile(){
    fs.access("ab.txt", (err)=>{
        if(err) throw err
        if(!err){
            fs.writeFile("ab.txt", " hii this is new eror ", (err)=>{
                if(err) throw err
                console.log(" data add sussessful");
            })
        }
    })
}