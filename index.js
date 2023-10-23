// Assignment Question

// Q.1
// console.log("hello world");

//Q.2
// let productOfTwoNumbers = (num1, num2) => num1 * num2;
// console.log(productOfTwoNumbers(5, 5));

// //student object

// const student = {
//   name: "pooja",
//   age: 24,
//   marks: 99,
//   printInfo() {
//     console.log(
//       `Student name is ${this.name}, age is ${this.age} and marks is ${this.marks}`
//     );
//   },
// };

// console.log(student);
// student.printInfo();

// Q.3

const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];
console.log(arr);
const newArr = arr.map((elem) => {
  return elem === " " ? "empty string" : elem;
});

console.log(newArr);

// How is hobbies const and it still doesnt error out
// when we add new elements to the array as in the video.

// reason
// hobbies is const array but still it working fine when we add new element in it
//using hobbies.push() method because here hobbies array is const type but array are reference
//variable we edit(add) element that store on the that reference(memory location)

// What according to you is spread opertor. Does spread operator create a new object or
// point to the same old object?
// Answer : spread operator is added in ES6 in js.
// spread operator writes as three dots(...).
// spread operator is use to iterate over an array or object.
// Also it used for copying one array element to another array without copying reference.
//It create new object.

// What is rest operator. [Watch video 9 and 10 from the same link above and understand it in detail]
//Answer : rest operator is added in ES6 in js.
// rest operator writes as three dots(...).
//If we have an indefinite no.of argument then we use rest operator.
//It packed all arguments to an array of arguments.

// What will be the output of this

// 1) const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

//OUTPUT : different objects

// 2) const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1)

// console.log(obj2)

//OUTPUT :
// {'key1': 1 , 'key2' : 2}
// {'key1': 1000 , 'key2' : 2}
