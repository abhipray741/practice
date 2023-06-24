// es6 
// rest and spread operator 

// example rest

function addNumber (a,b,c,...other)
{
    console.log(other);
    return a+b+c;
}
const res = addNumber(2,3,4,5,6,78,9,0);
console.log(res);


// spread in array 

var names = ["Ajay","anuj","Vivek","Ram"];

function getNames(name1,name2,name3)
{
    console.log(name1,name2,name3);
}

// getNames(names); // forcing to use all elemnet of array 
getNames(...names); // best way to do 
getNames(names[0],names[1],names[2])

// object ke sath in rest 

var students = {
    name:"Ajay",
    age:"28",
    hobbies:['Cricket',"Singing"]
 }
//  const age = students.age;
// const {age,...rest} =students;
const {...rest} = students; // destructuring with rest operator
console.log(rest);

//spread
var newStudents = {
    ...students,
    age:"29" // value override kardi age ki 
}
console.log(newStudents);