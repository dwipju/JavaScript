// `` : string interpolation. modern way of writing strings. 
let myName="dwip"
let age=27
console.log(`Hello, I am ${myName.toUpperCase()}. I am ${age} years old.`)

//most commonly used String methods:
let myString="JavaScript"
let myString2="    Dwip    "
let myUrl="https//:dwip%20bauri@google.com"

console.log(myString.substring(0,4))
console.log(myString.slice(-1,5)) //we can't use -ve value in substring method.
console.log(myString2.trim())     //removes extra space. there is trimStart() and trimEnd() too.
console.log(myUrl.replace('%20','-'))
console.log(myUrl.includes('dwip'))