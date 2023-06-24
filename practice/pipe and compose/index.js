// functional programming

// often uses pipe and compose = higer order fucntions

// a higher order function is any function which takes a function as an argument and returns an a function or both

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;





/*  
the pipe fuction accepts the series of function and  process an input and return a output which will be the input 
for the next function*/


// making our own compose  and pipe functions
/* note : Randa.js and lodash libraries have their own built in compose and pipe function lodash calls pipe "flow"*/
/* the higher order function reduce takes a list of values and applies a function to each of those values 
accumulating a single result */
/* Toget the compose order from right to left as we  see with nested function calls in our example above ,
 we need reduceRight...*/

const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);
const compResult = compose(
  multiplyBy5, 
  subtract1, 
  add2
  )(4);
console.log("compResult",compResult);

/* to do the same but read from left to right ... we use "pipe".  it is same except uses reduce instead of 
 reduceright */
/* reduce : afunction that accepts up to four argument  ,the callback function is called  one time 
 for each element in the array 
 the calls the specified callback function for all the element in the array the return value of the callback 
 function is the accumulated result and is provided as an argument in the next call to the callback function */

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(
  add2,
  subtract1, 
  multiplyBy5
  )(5);
console.log("pipe",pipeResult);






/* example for two arguments in pipe */
const divideBy = (divisor, num) => num / divisor;

const pipeResult2 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  (x) => divideBy(2, x))(5);
console.log("pipe for two argumets",pipeResult2);

// or you could curry the divideby function for custom unary function:
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2);
const pipeResult3 = pipe(add2, subtract1, multiplyBy5, divideBy2)(5);

console.log(pipeResult3);

// examples beyond math function
// word count check 
const lorem ="Sint tempor fugiat do sint eu laboris magna Lorem dolor labore commodo dolor excepteur. Reprehenderit mollit magna labore deserunt incididunt nisi nulla nostrud occaecat enim. Sunt Lorem officia eiusmod proident deserunt nulla qui anim irure eiusmod deserunt qui aliquip culpa. Excepteur sint ea elit nisi eu nisi deserunt. Excepteur reprehenderit ad anim adipisicing id ut culpa do nisi ex laboris commodo non culpa.";

const splitOnSpace = (string)=> string.split(" ");
const count =(array)=> array.length;


const wordCount =pipe(
    splitOnSpace,
    count
)
console.log("word count of lorem",wordCount(lorem));

// the pipe function is reusable 
const egbdf = "every good boy does fine"
console.log("wordCount of egbdf ",wordCount(egbdf));


// another example for palindrom checker 

const pal1="taco cat";
const pal2 = "UFO tofu";
const pal3 = "abhi";

const split = (string) => string.split('');
const join = (string)=> string.join('');
const lower = (string) =>string.toLowerCase();
const reverse = (array) => array.reverse();


const fwd = pipe(
    splitOnSpace,
    join, console.log("joinfwd",join),
    lower,console.log("lower",lower)
)

const rev = pipe(
    fwd,//nested pipe
    split,console.log("splitrev",split),
    reverse,console.log("reverse",reverse),
    join , console.log("joinrev",join),
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));




