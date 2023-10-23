// Assignment Question

// Q.1
// console.log("hello world");

//Q.2
let productOfTwoNumbers = (num1, num2) => num1 * num2;
console.log(productOfTwoNumbers(5, 5));

//student object

const student = {
  name: "pooja",
  age: 24,
  marks: 99,
  printInfo() {
    console.log(
      `Student name is ${this.name}, age is ${this.age} and marks is ${this.marks}`
    );
  },
};

console.log(student);
student.printInfo();
