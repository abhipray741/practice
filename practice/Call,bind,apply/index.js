// apply bind call in js 

let userDetails = {
    name:"abhipraya",
    age:23,
    Designation :"Software Engineer",
    printDetails:()=>{
        console.log(this)
    }
}

// let printDetails=function(city,country ){
//     console.log(this.name+" "+city +" "+country);
// }

// printDetails.call(userDetails,"jhansi","India") ;

let userDetails2 ={
    name:"anuj",
    age:23,
    Designation :"Software Engineer",
}

userDetails.printDetails.call(userDetails2);
//function borrowi
// printDetails.call(userDetails2,"jhansi","India");

//apply
// printDetails.apply(userDetails2,["jhansi","India"]);

//bind 
// let result = printDetails.bind(userDetails2,"jhansi","India");
// result;

// in bind we can make a  copy our function and we can invoke it later 
