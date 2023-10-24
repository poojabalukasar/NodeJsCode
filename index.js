// Assignment Question

// Q.1
// console.log("hello world");

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->

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

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->

// Q.3

// const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];
// console.log(arr);
// const newArr = arr.map((elem) => {
//   return elem === " " ? "empty string" : elem;
// });

// console.log(newArr);

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

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->

// Q.4

// What does destructuring do exactly. When would you use it.
// Destructuring feature added in ES6 in js.
//Destructuring allows us to extract values from an object and arrays and assign them to an variable.

//same use cases of destructurings:
// 1.Assigning values - we can easily assign object (properties) and arrays element ot an variable values.
//2.Swapping Variables - we swap two variables without using temporary variable.
//ex: let a = 10; let b = 20;
//[a,b] = [b,a];

//3.Extracting Data from APIs - When working with data received from APIs, we can destructure the response
// to extract the required information.

// What will be the output of the following?

// 1)const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}

// console.log(key1, key3)

//OUTPUT: 1,1000

// 2) const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1

// console.log(val1)

// console.log(val2)

//OUTPUT: value1
//value2

// 3) const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1

// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

//OUTPUT: SyntaxError - Identifier 'key1' and 'key2' already declared

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->

// Q.5

// What will be the output of this

// 1) console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');

//OUTPUT : a b d c

// 2) console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

//OUTPUT:a b e d c

// Challenge

// Can you make the above code print in the following sequence using promises and async/await.
//  Write the code and paste it here

// function printC() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("c");
//     }, 3000);
//   });
// }

// function printD() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("d");
//     }, 0);
//   });
// }

// async function printLetters() {
//   console.log("a");
//   console.log("b");
//   let c = await printC();
//   console.log(c);
//   let d = await printD();
//   console.log(d);
//   console.log("e");
// }

// printLetters();

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->

// Q.6

//1.Explain how does the internet work in your own words.
//Answer : The internet is a global network of interconnected computers and devices,
// each assigned a unique IP address.
//The client(browser) request the data to the server by typing URL in search box.
//This Url having a domain server return the IP address of the actual server this server return the response
//to the client in the form of html pages.
//data are transfer in the form of packets.

//2.What are the core modules of node js?
//Answer :fs (file system), http, https, os, path, url,querystring

//3.Explain the use of each one of them in detail.

//fs(file system) : This module allows us to interact with the file system, we can read from and write to files, create directories,
//and manage file operations.

//http :  provides the necessary functionality to create a web server, handle HTTP requests, and send HTTP responses.
// we can use this module to build web applications and APIs.

//https: Similar to the http module, the https module allows us to create secure
// HTTP servers using SSL/TLS for encrypted communication.

//os : we can use the os module to gather information about the host operating system,
// such as CPU architecture, memory, and network interfaces.

//path : The path module helps in working with file and directory paths, making it easier to handle file and directory
// operations in a cross-platform way.

//url : This module is used to parse and manipulate URLs, making it useful for dealing with
// URL components like query parameters, hostnames, and paths.

//4.What are relative path and absolute path? How to define them?

//Answer : Relative Path:  A relative path specifies the location of a file or directory in relation to
// the current working directory or another reference point.It is typically shorter and more concise,
//as it doesn't specify the full path from the root of the file system.
// Relative paths are useful when we want to refer to files or directories within the
//same directory or within a known folder structure.
//Ex: images/pic.jpg

//Absolute Path: An absolute path provides the full, unambiguous location of a file or directory
//from the root of the file system (e.g., C:\ on Windows or / on Unix-based systems).
// It is not dependent on the current working directory and is typically longer and more specific
// than relative paths.Absolute paths are used when we need to specify a file or directory's exact
//location in the file system.They are particularly useful when dealing with files and directories
// located in different parts of the file system.

// Ex : Windows: C:\Users\John\Documents\file.txt

// 5.What does createServer do?
//Answer : createServer() is method is used to create a HTTP server.

//6.What are anonymous functions?
//ANswer : function without name is known as anonymous function.

//7.What do you think server.listens exactly do?Why do we need it?
//Answer : server.listen() method start the server on specified port.

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("my name is Pooja");
  res.end("my name is Pooja");
});

server.listen(4000, () => {
  console.log("server is running on port 4000");
});
