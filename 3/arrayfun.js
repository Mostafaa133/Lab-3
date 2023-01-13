
// - toString() :
// - returns a string with array values separated by commas
const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
let text = fruits.toString() 
console.log(text)


// - valueOf() :  
// - method returns the array itself.

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits2.valueOf(); 
console.log(myArray)


//-concat() :
// - Joins arrays and returns an array with the joined arrays
const p1fruits = ["banana", "orange"];
const p2fruits = ["aple", "lemon", "mango"];
const allfruits = p1fruits.concat(p2fruits);
console.log(allfruits)


// - shift() :  
// - method returns selected elements in an array, as a new array.
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.shift("Lemon","Pineapple"); //output Array [Orange,Apple,Mango]

// - unshift() :  
// - method adds new elements to the beginning of an array.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon","Pineapple"); 

// - slice() :
// - method returns selected elements in an array, as a new array.
const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus7 = fruits.slice(1, 3); 



// - sort() :
// - sorts the elements of an array.
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.sort(); 


// - copyWithin() :
// -Copies array elements within the array, to and from specified positions
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.copyWithin(); 


// - push() :
// - method adds new items to the end of an array.
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.push("Kiwi", "Lemon"); 


// - array.from :
// -method returns an array from any object with a length property.

var fruits11=Array.from("Banana Orange Apple Mango")
console.log(fruits11)