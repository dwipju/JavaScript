const accountId=4356
let accountEmail="dwip.bauri@google.com"
var accountPassword=5643
accountCity="Durgapur"

// accountId=7000
accountEmail="dwip@facebook.com"
accountPassword=9000
accountCity="Kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity])



/*
#datatypes are based on memory allocation
    *Primitive datatypes->  "call by value" (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory.

    *Reference/Non primitive data types -> "call by reference" ( array,object, function) -> heap memory.
So if two variables have value with same reference then if changes are made in any of the vairable then the real object is changed. But this does not happen in case of Primitive datatypes.

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/