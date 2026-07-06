// ---------- 1. string, number, boolean ----------
let firstName: string ="priyanka";
let age: number = 25;
let isStudent: boolean = true;

console.log(firstName, age, isStudent);


// ---------- 2. Arrays ----------
 let fruites: string[] = ["apple", "banana", "orange"];
 let score : number[] = [ 90, 80, 70];  // if i want to push the value it show us error because we have defined the type of array as number only so we can push only number value in this array.
 console.log(fruites);
 console.log(score);
 fruites.push("grapes");
 console.log(fruites);

 // ---------- 3. any (avoid this) ----

 let data: any = "hello";
 data = 5;    // no error (this is the problem with 'any')
 data = true;   // no error either
 console.log(data);


 // ---------- 4. Type Inference ----------

 let lastName = "debnath";
 console.log(lastName); //when we write name that time its assume that the value have to be any kind of name