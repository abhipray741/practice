// closures 

var sum= function(a) {
    console.log("Live viewers"+a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}

var store = sum(2);
console.log(store(5));
// in javascript after execution of whole function the values are 
// retained so when store() is called we received the sum 