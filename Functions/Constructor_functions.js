function Person(){
    this.name = 'John',
    this.age = 23,
     this.greet = function (){
         console.log('hello');
     }
}
//create objects
const person11 =new Person();
const person22 = new Person();
// access properties
console.log("this is first program  "+person11.name);
console.log("this is first program again "+person22.name);
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();



//-------------Example 2: JavaScript Constructor Function Parameters -------------------
//You can also create a constructor function with parameters. For example,

// constructor function
function Person (person_name, person_age, person_gender) {

   // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}


// creating objects
const person13 = new Person('John', 23, 'male');
const person23 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person13.name); // "John"
console.log(person23.name); // "Sam"



//--------------Example 3: Adding Properties And Methods in an Object----------------
//You can add properties or methods in an object like this:

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person15 = new Person();
let person24 = new Person();

// adding property to person1 object
person15.gender = 'male';

// adding method to person1 object
person15.greet = function () {
    console.log('hello');
}

person15.greet();   // hello

// Error code person2 doesn't have greet() method
person24.greet();



//----------------------Example 4: JavaScript Object Prototype---------------------
//You can also add properties and methods to a constructor function using a prototype. For example,

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person19 = new Person();
let person29 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person19.gender); // Male
console.log(person29.gender); // Male