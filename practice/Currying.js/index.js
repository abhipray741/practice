//// currying in javascript 
// example f(a,b) into f(a)(b)

// Currying is a process in which we can transform a function with multiple argument 
// into a sequence of nesting function .it returna new function which expects the next argument inline 



function f(a) {
    return function (b) {
        return `${a} ${b}`; 
    }
}

console.log(f(5)(6)); 


// why do we use currying
// to avoid passing same varuable again and again 


// sum(2)(6)(1)

// function sum(a,b,c)
// {
//     return a+b+c;
// }

// function sum(a,b) {
//     return function (b  ) {
//             return a+b+c;
//     }
// }
// sum(2,6)(1)

// let res = sum(2)(6)(1);
// console.log(res);




function evalate(operation) 
{
    return function (a) {
        return function (b) {
            if(operation === "sum") return a + b;
            else if (operation === 'multiply') return a * b;
            else if(operstion === 'divide') return a / b;
            else if(operation === "subtract") return a - b;
            else return "invald operation";
        }
    }
}


const mul =evalate("multiply") // reuse multiple times one of the use case for currying
console.log(mul(2)(3)); //6
console.log(mul(2)(6));  //12


// implementing infinite currying 
function add (a) { // a =30
    return function(b) {
       if (b) return add(a+b);
       return a;
    }
}
// we want a function which works for infinite argument 
console.log(add(10)(20)());






// a curied function -> the number of nested function in a curied function depends upon no of arguments it received

function sum1(a) {
    return function (b,c) {
        return a + b + c;
    }
}

const x =sum1(10);
console.log(x(5,6));
console.log(x(3,2));

// or 
console.log(sum1(20)(1,4));

// this sum1 function is not a currying function as the no of argument received are 3 and nested function are 2
// so this is actually a partiall application 
// a partail application transform funtion into another function with  small arity 
// arity means the no of arguments



// currying problem where we need to pass infinite arguents 

const sum = (...a)=>{ 
    return (...b)=>{
        if(b.length) {
            return sum(...a,...b);
        }
        return a.reduce((curr,acc)=>curr+acc,0)
    }
}

const result1 = sum(10)(20,30)();
console.log(result1);



// notice how the function execute from inside to outisde and right to left
const result = multiplyBy5(subtract1(add2(4)));
console.log("result",result);











