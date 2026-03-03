// //JavaScript array-copy operations create shallow copies.

// /*
// # Shallow copy of an object has same reference to the source object. So when any change is made to any of the object (copy or source) it may change in both object. In shallow copy because the top-level structure is duplicated.

// # In deep copy the copy or the source object both don't share the reference so their changes are independent.

// #if an object has all primitive values (numbers, strings, booleans, null, undefined, symbols), there are no nested objects or references to share. then it satisfies definition of both deep copy and shallow copy.

// In JS all built in copy functions like slice, from they make shallow copies.

// */

// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const myCopy=Array.from(ingredientsList)
// // console.log(myCopy)
// // myCopy[1].list=[1,2,3]

// const myDeepCopy=JSON.parse(JSON.stringify(ingredientsList))
// // console.log(myDeepCopy,',,,')
// // myDeepCopy[1].list=[1,2,3]
// // console.log(myDeepCopy)
// // console.log(ingredientsList)


// let colors = ["red", "yellow", "blue"];
// // colors[5] = "purple";
// // colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// //join 
// const newColors=colors.join('+')
// console.log(newColors)

// //slice vs splice 
// const arr=[1,2,3,4,5,6,7]
// 		const sliceArr = arr.slice(1,4) //doesn't includes closing index : o/p = [2,3,4]
//         console.table([sliceArr,arr])

// 		const spliceArr = arr.splice(1,3) // includes closing arr
//         console.table([spliceArr,arr])
// colors=colors.concat(arr)
// console.log(colors)


// // Array.flat() returns a new array with all subarray elements concatenated to a certain depth.
const nestedArray=[1,2,3,4,[5,6,7,8,[9,10]]]
let newArray=nestedArray.flat(Infinity)
console.log(newArray)
