const arr=[9,7,8,6,5]
//JavaScript array-copy operations create shallow copies.

/*
# Shallow copy of an object has same reference to the source object. So when any change is made to any of the object (copy or source) it may change in both object. In shallow copy because the top-level structure is duplicated.

# In deep copy the copy or the source object both don't share the reference so their changes are independent.

#if an object has all primitive values (numbers, strings, booleans, null, undefined, symbols), there are no nested objects or references to share. then it satisfies definition of both deep copy and shallow copy.

In JS all built in copy functions like slice, from they make shallow copies.

*/

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const myCopy=Array.from(ingredientsList)
// console.log(myCopy)
// myCopy[1].list=[1,2,3]

const myDeepCopy=JSON.parse(JSON.stringify(ingredientsList))
// console.log(myDeepCopy,',,,')
// myDeepCopy[1].list=[1,2,3]
// console.log(myDeepCopy)
// console.log(ingredientsList)
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple


