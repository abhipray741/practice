//Async js  programming 
// Asynchronous programming is a technique that enables your 
//program to start a potentially long-running task and still be 
//able to be responsive to other events while that task runs, rather than having to wait 
//until that task has finished. Once that task has finished, your program is presented with the result.


const datas = [
    {name:"abhipraya" ,Profession:"Software engineer"},
    {name:"anuj" ,Profession:"Software engineer"}
]

function getDatas () {
    setTimeout(()=>{
        let output ="";
        datas.forEach((data,index)=>{
            output+= `<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000)
}

// function createData(newData){
//     setTimeout(()=>{
//         datas.push(newData)
//     },2000)
// }
// problem now createdata function is taking time and new object which is pushed is not visble on DOM 
// now here comes the solution for this problem
// we can use callback here , prmise and async await for the easy of syntax 
// createData({name:"Vivek",Profession:"Software Engineer"})
// getDatas();



//callback
// function createData1(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData)
//         callback();
//     },2000)
// }
// createData1({name:"Vivek",Profession:"Software Engineer"}, getDatas)


// promise 
function createData2(newData){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let error =false;
            if(!error)
            {
                resolve();
            } else 
            {
                reject("Something gone wrong ");
            }
        },2000)
    }) 
   
}
// createData2({name:"Vivek",Profession:"Software Engineer"}).then(getDatas).catch(err=> console.log(err));

 


//async await 
async function start () {
    await createData2({name:"Vivek",Profession:"Software Engineer"})
    getDatas();
}
start();