//-------------Parameter Types---------

function add(a:number, b:number):number{
    return a+b;
}

 console.log(add(5, 10)); //15

//-------------2. Return Types---------

 function multiply(a:number, b:number):number{
    return a*b;
 }

    console.log(multiply(5, 10)); //50

//-------------3. Optional Parameters---------

function greet(name:string, age?:number):string{
    if(age){
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}.`;
}

//-------------4. Default Parameters---------

function greetWithDefault(name:string, age:number=18):string{
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greetWithDefault("Alice")); // Hello Alice, you are 18 years old.
console.log(greetWithDefault("Bob", 25)); // Hello Bob, you are 25 years old.


//------------- Union & Intersection Types---------

function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}
printId(123); // Your ID is: 123
printId("abc"); // Your ID is: abc


//-----Literal Types---------
function printDirection(direction: "up" | "down" | "left" | "right") {
  console.log(`You are moving ${direction}`);
}
printDirection("up"); // You are moving up
