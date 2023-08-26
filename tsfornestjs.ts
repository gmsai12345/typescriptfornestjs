// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

let names: string = "sai dhakshan";
console.log(names);
var nums: number = 100;
console.log(nums);
var flag: boolean = true;
console.log(flag);
const namesarray: string[] = ["sai","dhakshan","yoganathan"];
namesarray.forEach(function(value)
{
    console.log(value);
});
var sum: number = 0;
var numsarray: number[] = [1,2,3];
numsarray.push(4);
numsarray.forEach(function(value)
{
    sum += value;
});
console.log(sum);
// objects
const objectname: {name:string,age:number} = 
{
    name:"yoganathan",
    age:45
};
// typescript functions
function printhello(): void
{
    console.log("hello word");
}
printhello();
// function with parameters
const num1: number = 5;
const num2: number = 6;
function sums(a:number,b:number): number
{
    return a+b;
}
console.log(sums(num1,num2));
// optional parameter
const num3 = 4;
function sum1(a:number,b:number,c?:number): number
{
    return a+b+(c||5);
}
console.log(sum1(num1,num2));
console.log(sum1(num1,num2,num3));
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"

console.log(Greet("Hello"));
//Interface is a structure that defines the contract in your application. It defines the syntax for classes to 
//follow. Classes that are derived from an interface must follow the structure provided by their interface.
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" };
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
console.log(emp.displayName()); // Name = Bill, Employee Code = 100
class Car {
    name: string;
        
    constructor(name: string) {
        this.name = name;
    }
    
    run(speed:number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
console.log(a);
 
//A Decorator is a special kind of declaration that can be attached to a class declaration, 
//method, accessor, property, or parameter. Decorators use the form @expression, where expression must
// evaluate to a function that will be called at runtime with information about the decorated declaration.

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
