// objects in javascripts

const user = {
    name:"abhpraya",
    age:24,
    // what if we want to make a properties with space so
    "like this vedio": true ,

};

//  modify object Value : user.name = "Abhipraya mishra";
// delete : delete user.age
console.log(user["like this vedio"]); // [] is also used to access object properties  it will print true 





// delete keyword is only used when we want to delete properties from an object 
const func = (function (a){
    delete a; // this delete will not delete a because delete is used delete properties of an object 
    return a;
})(5); 

console.log(func);

// how add dynamic key values pair in object

const property = "firstName"
const name = "Abhipraya Mishra"

const user1 ={
    [property]: name,
};
console.log(user1);


// now if we want to loop through each property and print values 
 for (key in user) {
    console.log(key) // printing key of all object 
    console.log(user[key]);// printing Values of all object 
 }



 // Question 1 
 const obj ={
    a:"one",
    b:"two",
    a:"three",
 };

 console.log(obj); // ouput will be {a:three,b:two}


 // Question 2  create a function multiplyByTwo(obj) that multiplies all numeric properties values of num by 2
 let nums = {
    a:100,
    b:200,
    title:"My nums", 
 };

 function multiplyByTwo(obj) {
    for(key in obj) {
        if(typeof (obj[key]) === "number" )
        {
            obj[key] *= 2
        }
    }
 }
 multiplyByTwo(nums);

 console.log(nums);

 // question 3

